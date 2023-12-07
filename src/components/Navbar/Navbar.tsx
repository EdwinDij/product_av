"use client";
import React from "react";
import { useAuth } from "../../app/AuthProvider";

export default function Navbar() {
  const auth = useAuth();

  const userInfo = auth.user;
  console.log("auth:", userInfo);
  return (
    <nav className="border-b-2 py-2 px-4">
      <ul className="flex justify-between">
        {userInfo === null ? (
          <>
            <li>Tarif</li>
            <li>S{"'"}inscrire</li>
            <li>Se Connecter</li>
          </>
        ) : (
          <>
            <p>Bonjour, {userInfo.displayName} </p>
          </>
        )}
      </ul>
    </nav>
  );
}
