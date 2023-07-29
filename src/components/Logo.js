import React from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Logo() {
  return (
    <Link href="/" className={`text-2xl font-black ${inter.className}`}>
      RigGenie
    </Link>
  );
}

export default Logo;
