"use client"
import React, { useState } from "react";
import { useAuth } from "../AuthProvider";
import { Reservation } from "../../Type/Types";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

export const useDashboard = () => {
  const [productName, setProductName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");

  const auth = useAuth();
  console.log("auth:", auth.user);

  let id = Math.floor(Math.random() * 99999).toString();

  const checkInput = () => {
    if (
      productName === "" ||
      quantity === 0 ||
      price === 0 ||
      clientName === "" ||
      clientPhone === ""
    ) {
      console.log("remplissez les champs");
      return false;
    }

    return true;
  };

  const handleSubmitCustomer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isInputOk = checkInput();
    console.log(isInputOk);

    if (!isInputOk) {
      return;
    }

    try {
      const data: Reservation = {
        id: id,
        product: productName,
        quantity: quantity,
        price: price,
        clientName: clientName,
        clientPhone: clientPhone,
      };

      const res = await setDoc(doc(db, "product", id), data);
      console.log("produit crée", res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
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
  }

}