import CartContext from "@/context/CartContent";
import Link from "next/link";
import React, { useContext } from "react";

const FeaturedProducts = ({ product }) => {
  const { addProduct } = useContext(CartContext)

const addToCart = (e, id) =>{
  e.preventDefault();
  addProduct(id);
}

  return (
    <div className="bg-gray-900 text-white py-10 ">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="mt-8 ms-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            {product.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">{product.description}</p>
          <div className="flex gap-4 mt-6">
            <Link href={"/products/1"}>
              <button className="cursor-pointer bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Read more</button>
            </Link>
            <Link href={"/products/1"}>
              <button onClick={(e)=>addToCart(e, product._id)} className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Add to cart 
              </button>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={product.images[0]}
            alt="prod image"
            className="w-80 h-64 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
