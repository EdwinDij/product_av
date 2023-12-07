// DashboardComponent.jsx
import React from "react";
import { CustomerList, Reservation } from "../../Type/index";

const DashboardComponent = ({ customerList }: CustomerList) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Tableau de bord</h2>
      <div className="overflow-x-auto">
        {customerList.length > 0 && (
          <table className="min-w-full">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Nom du Client</th>
                <th className="px-4 py-2">Nom du Produit</th>
                <th className="px-4 py-2">Quantité</th>
                <th className="px-4 py-2">Prix</th>
                <th className="px-4 py-2">Catégorie du Produit</th>
              </tr>
            </thead>
            <tbody>
              {customerList.map((customer: Reservation) => (
                <tr key={customer.id}>
                  <td className="px-4 py-2">en cours</td>
                  <td className="px-4 py-2">on verra</td>
                  <td className="px-4 py-2">{customer.clientName}</td>
                  <td className="px-4 py-2">{customer.product}</td>
                  {/* <td className="px-4 py-2">{customer.productCategory}</td> */}
                  <td className="px-4 py-2">
                    {customer.quantity} {customer.valueMeter}
                  </td>
                  <td className="px-4 py-2">{customer.price}€ / {customer.valueMeter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {customerList.length === 0 && (
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Nom du Client</th>
                <th className="px-4 py-2">Nom du Produit</th>
                <th className="px-4 py-2">Catégorie du Produit</th>
                <th className="px-4 py-2">Quantité</th>
                <th className="px-4 py-2">Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">En cours</td>
                <td className="px-4 py-2">20/20/2020</td>
                <td className="px-4 py-2">Pierre</td>
                <td className="px-4 py-2">Vin</td>
                <td className="px-4 py-2">alcool</td>
                <td className="px-4 py-2">14</td>
                <td className="px-4 py-2">20 €</td>
              </tr>

              <tr>
                <td className="px-4 py-2">En cours</td>
                <td className="px-4 py-2">20/20/2020</td>
                <td className="px-4 py-2">Pierre</td>
                <td className="px-4 py-2">Vin</td>
                <td className="px-4 py-2">alcool</td>
                <td className="px-4 py-2">14</td>
                <td className="px-4 py-2">20 €</td>
              </tr>

              <tr>
                <td className="px-4 py-2">En cours</td>
                <td className="px-4 py-2">20/20/2020</td>
                <td className="px-4 py-2">Pierre</td>
                <td className="px-4 py-2">Vin</td>
                <td className="px-4 py-2">alcool</td>
                <td className="px-4 py-2">14</td>
                <td className="px-4 py-2">20 €</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardComponent;
