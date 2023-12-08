import { set } from 'firebase/database';
"use client"
import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider";
import { Reservation } from "../../Type/Types";
import { deleteDoc, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db, reservationCollection } from "../../../firebase/config";

export const useDashboard = () => {
  const [productName, setProductName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [valueMeter, setValueMeter] = useState<string>("");
  const [customer, setCustomer] = useState<Reservation[]>([]);
  const [idCustomer, setIdCustomer] = useState<string>("");

  const auth = useAuth();

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

  // const getCustomerId = async(id:string) => {
  //   const customerQuery = query(reservationCollection, where("id", "==", id))
  //   const customerSnapshot = await getDocs(customerQuery);
  //   console.log(customerSnapshot.docs[0].data().id);
  //   setIdCustomer(customerSnapshot.docs[0].data().id);
  // }

  const cleanInput = () => {
    setProductName("");
    setQuantity(0);
    setPrice(0);
    setClientName("");
    setClientPhone("");
    setValueMeter("");
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
        status: "En attente",
      };

      const res = await setDoc(doc(db, "customerReservation", id), data);
      console.log("produit crée");
      getCustomer(auth.user?.uid);
      cleanInput();

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomer(auth.user?.uid);
  })


  const handleDeleteCustomer = async (id: string) => {
    await deleteDoc(doc(db, "customerReservation", id))
    getCustomer(auth.user?.uid);
    console.log("produit supprimé");
  }

  const updateCustomer = async (id: string, status:string ) => {
    await setDoc(doc(db, "customerReservation", id), {status: status}, {merge: true})
    getCustomer(auth.user?.uid);
    console.log("produit mis à jour")
  }

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
    // getCustomerId,
    idCustomer,
    handleDeleteCustomer,
    updateCustomer
  }

}