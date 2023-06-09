import CartContext from "@/context/CartContent";
import Link from "next/link";
import React from "react";
import { useContext } from "react";

const Navbar = () => {
  const {cartProduct} = useContext(CartContext);
  return (
    <>
      <header className="bg-gray-400">
        <div className="container mx-auto py-4 flex justify-between">
          <div className="flex gap-1 md:px-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <Link href="/">
              <label className="text-white text-xl font-bold cursor-pointer">
                Ecommerce
              </label>
            </Link>
          </div>
          <nav className="flex gap-5 ">
            <Link href="/products">
              <label className="cursor-pointer">Products</label>
            </Link>
            <Link href="/categories">
              <label className="cursor-pointer">Categories</label>
            </Link>
            <Link href="/cart">
              <label className="cursor-pointer">Cart ({ cartProduct.length })</label>
            </Link>
            <Link href="/account">
              <label className="cursor-pointer">Account</label>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
