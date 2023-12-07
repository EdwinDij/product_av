"use client"
import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import { Reservation } from "../../Type/Types";
import { doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db, reservationCollection } from "../../../firebase/config";
import { set } from "firebase/database";

export const useDashboard = () => {
  const [productName, setProductName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [valueMeter, setValueMeter] = useState<string>("");
  const [customer, setCustomer] = useState<Reservation[]>([]);

  const auth = useAuth();
  console.log("auth:", auth.user);

  const checkInput = () => {
    if (
      productName === "" ||
      quantity === 0 ||
      price === 0 ||
      clientName === "" ||
      clientPhone === "" ||
      valueMeter === ""
    ) {
      console.log("remplissez les champs");
      return false;
    }

    return true;
  };

  const checkPhoneNumber = () => {
    if (clientPhone.length !== 10) {
      console.log("numéro de téléphone invalide");
      return false;
    }
    return true;
  };

  const generateRandomId = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  };

  const userConnected = () => {
    if (auth.user === null) {
      console.log("vous n'êtes pas connecté");
      return false;
    }
    return true;
  };

  const getCustomer = async (id: string | undefined) => {
    const reservationQuery = query(reservationCollection, where("shopId", "==", id))
    const reservationSnapshot = await getDocs(reservationQuery);
    const reservationList: Reservation[] = [];
    reservationSnapshot.forEach((doc) => {
      reservationList.push(doc.data() as Reservation);
    });
    setCustomer(reservationList);
  }



  const handleSubmitCustomer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //verification des inputs, si ok, on crée le produit avec un id aléatoire
    const isInputOk = checkInput();
    const isPhoneNumberOk = checkPhoneNumber();
    const id = generateRandomId(clientName.length + productName.length);
    const isUserConnected = userConnected();
    console.log(isInputOk);
    console.log(isPhoneNumberOk);
    console.log(id)
    console.log(isUserConnected);

    if (!isInputOk) {
      return;
    }
    if (!isPhoneNumberOk) {
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
        valueMeter: valueMeter,
        shopId: auth.user?.uid,
      };

      const res = await setDoc(doc(db, "customerReservation", id), data);
      console.log("produit crée");
      getCustomer(auth.user?.uid);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer(auth.user?.uid);
  },[auth.user?.uid])

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
    valueMeter,
    setValueMeter,
    customer,
  }

}