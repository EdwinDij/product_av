import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function Page() {
  return (
    <section className="p-24 max-lg:p-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center max-lg:text-center mb-20">
          Tarification
        </h1>
        <div className="flex gap-10 ">
          <div className="p-8 border border-indigo-200 rounded-lg text-center">
            <h2 className="text-2xl mb-8">Plan de base</h2>
            <p className="mb-8">Prix: €20/mois</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Notification automatique
                par SMS
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Enregistrement des
                clients
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Changement de
                disponibilité des produits
              </li>
            </ul>
            <div>
              <button className="bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow--300 text-white mt-8 hover:bg-indigo-800">
              Je choisis cette offre
              </button>
            </div>
          </div>
          <div className="p-8 border border-indigo-200 rounded-lg text-center">
            <h2 className="text-2xl mb-8">Plan annuel</h2>
            <p className="mb-8">Prix: €200/an</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />2 mois offerts
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                Toutes les fonctionnalités du plan de base
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" />
                Support 24/7
              </li>
            </ul>
            <div>
              <button className="bg-indigo-500 px-4 py-2 rounded-lg shadow-lg shadow--300 text-white mt-8 hover:bg-indigo-800">
                Je choisis cette offre
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
