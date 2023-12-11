"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  onAuthStateChanged,
  signOut as authSignOut,
  getAuth,
  NextOrObserver,
} from "firebase/auth";
import { firebaseConfig, userDB } from "../../firebase/config";
import { initializeApp } from "firebase/app";
import { getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { User } from "../Type/index";
import { UserInfo } from "firebase/auth";

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPrenium, setIsPrenium] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const clear = () => {
    setUser(null);
    setLoading(true);
    setIsPrenium(false);
  };

  const getUsersById = async (id: string) => {
    const queryId = query(collection(db, "userShop"), where("id", "==", id));
    const querySnapshot = await getDocs(queryId);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUser({
        id: doc.data().id,
        email: doc.data().email,
        username: doc.data().username,
        prenium: doc.data().prenium,
      });
    });
  };

  const authStateChanged = async (user: UserInfo | null) => {
    setLoading(true);
    if (!user) {
      clear();
      return;
    }
    await getUsersById(user.uid);
    setLoading(false);
  };

  const signOut = () => authSignOut(auth).then(clear);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      authStateChanged as NextOrObserver<UserInfo>
    );
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signOut,
  };
}

const AuthUserContext = createContext<{
  user: User | null;
  loading: boolean;
  signOut: () => void;
  prenium: boolean;
}>({
  user: null,
  loading: true,
  signOut: () => {},
  prenium: false,
});

export function AuthUserProvider({ children }: PropsWithChildren) {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={{ ...auth, prenium: false }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
