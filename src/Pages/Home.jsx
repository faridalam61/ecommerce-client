import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";

function Home() {
  return (
  <>
  <div className="herobg">
    <div className="container mx-auto h-[500px] flex flex-col justify-center items-center">
      <div className="bg-white rounded-md p-14 w-3/4 text-center">
        <h1 className="text-2xl">Lorem ipsum dolor sit amet.</h1>
        <p className="mt-4 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio placeat dolorum quasi vel optio minima quo saepe esse aspernatur.</p>
        <Link to="/" className="py-2 px-6 bg-green-500 text-white rounded-md">Discover Our Collections</Link>
      </div>
    </div>
  </div>
  <div className="my-10">
    <div className="container mx-auto text-center">
    <h1 className="text-4xl">Products</h1>
    <p className="my-3">Order it for you or your beloved ones</p>
  
    <div className="grid grid-cols-4 gap-6 mt-10">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  </div>
  </div>
  </>
  )
}

export default Home;
