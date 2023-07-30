import React from "react";
import { categories } from "@/constants/products.const";
import Link from "next/link";
import { useRouter } from "next/router";

function AppProductsLayout({ children }) {
  const router = useRouter();
  const activeCategory = router.query.category;

  return (
    <article className="flex flex-grow gap-4">
      {/* sidebar */}
      <section className="py-4 pl-8 bg-slate-100">
        <h1 className="mb-4 ml-4 text-xl font-bold">Categories</h1>
        <ul>
          <li>
            <Link
              className={`${
                activeCategory === "All"
                  ? "bg-white font-bold text-primary"
                  : ""
              } rounded-l-lg pl-4 pr-8 py-1 flex`}
              href="/products/All"
            >
              All
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                className={`${
                  activeCategory === category
                    ? "bg-white font-bold text-primary"
                    : ""
                } rounded-l-lg pl-4 pr-8 py-1 flex`}
                href={`/products/${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </article>
  );
}

export default AppProductsLayout;
