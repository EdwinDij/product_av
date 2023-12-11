"use client";

import { useAuth } from "../../app/AuthProvider";
import React, { useEffect, useState } from "react";

export const useNavbar = () => {
  const auth = useAuth();
  const [greeting, setGreeting] = useState("Bonjour");
  const userInfo = auth.user;
  console.log("auth:", userInfo);
  console.log("auth:", auth);

  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 6 && currentHour < 12) {
        setGreeting("Bonjour");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Bonjour");
      } else {
        setGreeting("Bonsoir");
      }
    };

    getCurrentGreeting();
    const interval = setInterval(getCurrentGreeting, 60000); // Actualise toutes les minutes

    return () => clearInterval(interval);
  }, []);

  const logout = () => {
    auth.signOut();
    console.log("déconnexion")
  }


  return {
    greeting,
    logout,
    userInfo,
    
  }
}