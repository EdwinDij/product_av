"use client";
import { useDashboard } from "./useDashboard";
import { Dashboard } from "../../components";

export default function Page() {
  const {
    setProductName,
    setQuantity,
    setPrice,
    setClientName,
    setClientPhone,
    handleSubmitCustomer,
    customer,
    quantity,
    price,
    valueMeter,
    productName,
    clientName,
    clientPhone,
    setValueMeter,
    // isLoading,
    userAuthentified,
  } = useDashboard();

  return (
    <>
      {/* {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : ( */}
        <div>
          <form
            onSubmit={(e) => handleSubmitCustomer(e)}
            className="flex items-center justify-center"
          >
            <input
              type="text"
              value={productName}
              placeholder="nom du produit"
              onChange={(e) => setProductName(e.target.value)}
              className="border p-2 rounded-xl mb-6"
            />
            <input
              type="number"
              value={quantity === 0 ? "" : quantity}
              placeholder="Quantité"
              onChange={(e) => setQuantity(parseFloat(e.target.value))}
              className="border p-2 rounded-xl mb-6"
            />
            <select
              className="border p-2 rounded-xl mb-6"
              onChange={(e) => setValueMeter(e.target.value)}
              value={valueMeter}
            >
              <option value="">-- Choissez un type de quantité --</option>
              <option value="Kg">Kilogrammes</option>
              <option value="g">Grammes</option>
              <option value="Unités">Unité(s)</option>
              <option value="L">Litre(s)</option>
            </select>
            <input
              type="number"
              value={price === 0 ? "" : price}
              placeholder="Prix en euro"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="border p-2 rounded-xl mb-6"
            />
            <input
              type="text"
              value={clientName}
              placeholder="nom du client"
              onChange={(e) => setClientName(e.target.value)}
              className="border p-2 rounded-xl mb-6"
            />
            <input
              type="tel"
              value={clientPhone}
              placeholder="numéro du client"
              onChange={(e) => setClientPhone(e.target.value)}
              className="border p-2 rounded-xl mb-6"
              pattern="[0-9]{10}"
            />
            <button className="p-2 rounded-xl mb-6 bg-indigo-500" type="submit">
              Valider
            </button>
          </form>
          <Dashboard customerList={customer} />
        </div>
      {/* )} */}
    </>
  );
}
