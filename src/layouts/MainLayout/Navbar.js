import Logo from "@/components/Logo";
import { categories } from "@/constants/products.const";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <header className="px-8 navbar bg-slate-200">
      <div className="flex-1">
        <Logo />
      </div>
      <nav className="flex-none">
        <ul className="items-center gap-4 p-0 px-1 menu menu-horizontal">
          <li>
            <details>
              <summary>Category</summary>
              <ul className="!mt-0 bg-base-100 z-10">
                <li>
                  <Link href="/products/All">All</Link>
                </li>
                {categories.map((category) => (
                  <li key={category}>
                    <Link href={`/products/${category}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <button className="btn btn-outline btn-primary btn-sm">
              Login/Register
            </button>
          </li>
          <li>
            <button className="btn btn-sm btn-error">Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
