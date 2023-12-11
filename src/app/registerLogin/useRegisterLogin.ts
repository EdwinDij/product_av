"use client"
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../../../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { User } from "../../Type/Types";


export const useRegisterLogin = () => {
  const [registerForm, setRegisterForm] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const auth = getAuth();
  const router = useRouter();

  const register = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      console.log("Les mots de passe ne correspondent pas");
      return;
    }
    if (username === "" || email === "" || password === "") {
      console.log("Veuillez remplir tous les champs");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const data: User = {
        id: user.uid,
        username: username,
        email: email,
        prenium: false,
      };
      // console.log("Before setDoc:", data);
      await setDoc(doc(db, "userShop", user.uid), data);
      console.log("Document successfully written!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const login = async (e: { preventDefault: () => void }) => {
    //TODO: ajouter des notifications lors de la connexion
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("Veuillez remplir tous les champs");
    }

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };
  
  return {
    login,
    register,
    registerForm,
    password,
    passwordConfirm,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setRegisterForm,
    setUsername
  }
}