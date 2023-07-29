import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className={`${poppins.className} min-h-[calc(100vh-160px)]`}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
