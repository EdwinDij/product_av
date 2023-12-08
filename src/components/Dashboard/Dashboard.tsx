// DashboardComponent.jsx
import React from "react";
import { Reservation } from "../../Type/index";
import { useDashboard } from "@/app/dashboard/useDashboard";
import { MdDeleteForever } from "react-icons/md";


type DashboardProps = {
  customerList: Reservation[];
};

export const Dashboard = ({ customerList }: DashboardProps) => {
  const {
    // getCustomerId,
    idCustomer,
    handleDeleteCustomer,
    updateCustomer,
  } = useDashboard();

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Tableau de bord</h2>
      <div className="overflow-x-auto">
        {customerList.length > 0 && (
          <table className="border-separate border-spacing-y-4 ">
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
            <tbody className="px-4">
              {customerList.map((customer: Reservation) => (
                <tr
                  key={customer.id}
                  className=" text-left bg-gray-100 borderRadius shadow-md"
                >
                  <td className="px-10 py-4 ">{customer.status}</td>
                  <td className="px-10 py-4">{customer.date}</td>
                  <td className="px-10 py-4">{customer.clientName}</td>
                  <td className="px-10 py-4">{customer.product}</td>
                  {/* <td className="px-10 py-4">{customer.productCategory}</td> */}
                  <td className="px-10 py-4">
                    {customer.quantity} {customer.valueMeter}
                  </td>
                  <td className="px-10 py-4">
                    {customer.price}€ /{customer.valueMeter}
                  </td>
                  <td className="px-10 py-4">
                    <div className="flex justify-center items-center gap-2">
                        <MdDeleteForever onClick={() => handleDeleteCustomer(customer.id)} size={35} className="text-red-500 hover:cursor-pointer hover:scale-105 transition ease-out delay-300"/>

                      <select
                        className="p-2 rounded-xl  hover:scale-105 transition ease-out delay-300"
                        onChange={(e) =>
                          updateCustomer(
                            customer.id,
                            (e.target as HTMLSelectElement).value
                          )
                        }
                      >
                        <option value="En attente">
                          -- Choissez un statut --
                        </option>
                        <option value="Contacté">Client contacté</option>
                        <option value="Annulé">Annulé</option>
                        <option value="Terminé">Terminé</option>
                        <option value="En attente">En attente</option>
                      </select>
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
