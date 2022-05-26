import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Best Store Ever</title>
      </Head>
      <header>
        <NavBar></NavBar>
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
