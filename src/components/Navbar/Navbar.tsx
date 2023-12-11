"use client";
import React from "react";
import { useNavbar } from "./useNavbar";
import Link from "next/link";

export const Navbar = () => {
  const { greeting, userInfo, logout } = useNavbar();


  return (
    <nav className="border-b-2 py-4 px-14 shadow-md mb-10">
      {userInfo === null ? (
        <>
          <ul className="flex justify-between text-lg">
            <li className="hover:text-indigo-500 font-bold ">
              <Link href="/">Accueil</Link>
            </li>

            <li>Tarif</li>
            <li className="hover:text-indigo-500 font-bold">
              <Link href="/registerLogin">S{"'"}inscrire/Se connecter</Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <p>
            {greeting}, {userInfo.displayName}
          </p>
          <ul className="flex gap-4">
            <li>Mon abonnement</li>
            <li onClick={logout}>Se Déconnecter</li>
          </ul>
        </>
      )}
    </nav>
  );
};
