"use client";
import React from "react";
import { useNavbar } from "./useNavbar";

export const Navbar = () => {
  const { greeting, userInfo } = useNavbar();

  return (
    <nav className="border-b-2 py-4 px-14 shadow-md mb-10">
      <ul className="flex justify-between">
        {userInfo === null ? (
          <>
            <ul>
              <li>Tarif</li>
              <li>S{"'"}inscrire</li>
              <li>Se Connecter</li>
            </ul>
          </>
        ) : (
          <>
            <p>
              {greeting}, {userInfo.displayName}
            </p>
            <ul className="flex gap-4">
              <li>Mon abonnement</li>
              <li>Se Déconnecter</li>
            </ul>
          </>
        )}
      </ul>
    </nav>
  );
}
