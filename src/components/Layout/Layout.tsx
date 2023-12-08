import React, { PropsWithChildren } from "react";
import { Footer, Navbar } from "../index";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <header>
      <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
