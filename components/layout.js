import React from "react";
import Footer from "./Footer";
import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Yash J Mistry</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet" />
        <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />

      </Head>
      <NavBar />
      <div className={"container"}>{children}</div>
      <Footer />

      <script src="vanilla-tilt.js"></script>
    </div>
  );
}
