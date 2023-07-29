import React from "react";
import { Poppins } from "next/font/google";
import Logo from "@/components/Logo";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

function Footer() {
  return (
    <div
      className={`${poppins.className} bg-slate-400 min-h-[100px] flex flex-col items-center p-4`}
    >
      <Logo />
      <p>
        @2023 Rig Genie. All rights reserved. | Privacy Policy | Terms of
        Service | Moulvibazar, Sylhet | info@riggenie.com
      </p>
    </div>
  );
}

export default Footer;
