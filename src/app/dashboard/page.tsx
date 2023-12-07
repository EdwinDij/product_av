"use client";
import { useDashboard } from "./useDashboard";

export default function Page() {
  const {
    productName,
    setProductName,
    quantity,
    setQuantity,
    price,
    setPrice,
    clientName,
    setClientName,
    clientPhone,
    setClientPhone,
    handleSubmitCustomer,
  } = useDashboard();

  return (
    <div>
      <form onSubmit={(e) => handleSubmitCustomer(e)}>
        <input
          type="text"
          value={productName}
          placeholder="nom du produit"
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 rounded-xl mb-6"
        />
        <input
          type="number"
          placeholder="Quantité"
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
          className="border p-2 rounded-xl mb-6"
        />
        <input
          type="number"
          placeholder="Prix"
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="border p-2 rounded-xl mb-6"
        />
        <input
          type="text"
          placeholder="nom du client"
          onChange={(e) => setClientName(e.target.value)}
          className="border p-2 rounded-xl mb-6"
        />
        <input
          type="text"
          placeholder="numéro du client"
          onChange={(e) => setClientPhone(e.target.value)}
          className="border p-2 rounded-xl mb-6"
        />
        <button className="p-2 rounded-xl mb-6 bg-indigo-500" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}
