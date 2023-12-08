// DashboardComponent.jsx
import React from "react";
import { Reservation } from "../../Type/index";

type DashboardProps = {
  customerList: Reservation[];
};
export const Dashboard = ({ customerList }: DashboardProps) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Tableau de bord</h2>
      <div className="overflow-x-auto">
        {customerList.length > 0 && (
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead className="text-left">
              <tr>
                <th className="px-10 py-4">Status</th>
                <th className="px-10 py-4">Date</th>
                <th className="px-10 py-4">Nom du Client</th>
                <th className="px-10 py-4">Nom du Produit</th>
                <th className="px-10 py-4">Quantité</th>
                <th className="px-10 py-4">Prix</th>
              </tr>
            </thead>
            <tbody>
              {customerList.map((customer: Reservation) => (
                <tr
                  key={customer.id}
                  className="bg-neutral-100/40 text-left rounded-lg shadow-md border border-red-500"
                >
                  <td className="px-10 py-4">en cours</td>
                  <td className="px-10 py-4">on verra</td>
                  <td className="px-10 py-4">{customer.clientName}</td>
                  <td className="px-10 py-4">{customer.product}</td>
                  {/* <td className="px-10 py-4">{customer.productCategory}</td> */}
                  <td className="px-10 py-4">
                    {customer.quantity} {customer.valueMeter}
                  </td>
                  <td className="px-10 py-4">
                    {customer.price}€ / {customer.valueMeter}
                  </td>
                  <td className="px-10 py-4">
                    <div className="flex justify-center items-center gap-2">
                      <button className="p-2 rounded-xl bg-red-500 hover:scale-110 transition ease-out delay-300">
                        Supprimer
                      </button>
                      <button className="p-2 rounded-xl bg-indigo-500 hover:scale-110 transition ease-out delay-300">
                        Modifier
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {customerList.length === 0 && (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-10 py-4">Status</th>
                <th className="px-10 py-4">Date</th>
                <th className="px-10 py-4">Nom du Client</th>
                <th className="px-10 py-4">Nom du Produit</th>
                <th className="px-10 py-4">Quantité</th>
                <th className="px-10 py-4">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-10 py-4">En cours</td>
                <td className="px-10 py-4">20/20/2020</td>
                <td className="px-10 py-4">Pierre</td>
                <td className="px-10 py-4">Vin</td>
                <td className="px-10 py-4">alcool</td>
                <td className="px-10 py-4">14</td>
                <td className="px-10 py-4">20 €</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};