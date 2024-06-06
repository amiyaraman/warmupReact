import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav';
import { Link, useLocation } from 'react-router-dom';
import { ProductContext } from '../utils/context';
import axiosInstance from '/src/utils/axiosInstance';


const Home = () => {
  const [product] = useContext(ProductContext);

  const {search}=useLocation();

  const category=decodeURIComponent(search.split("=")[1]);

  const [filterProduct,setFilterProduct]=useState(null);


  const getProductCategory=async ()=>{
    try{
      const { data } = await axiosInstance(`/products/category/${category}`);
      setFilterProduct(data);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    if(!filterProduct) setFilterProduct(product);
    if(category!="undefined") getProductCategory();
  },[category,product]);





  return product ? (
    <>
      <Nav />
      <div className="h-full w-[85%]  p-5 pt-[2%] flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        {filterProduct&&filterProduct.map((p, i) => {
          return (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="p-3 card w-[18%] h-[35vh] shadow border rounded flex flex-col justify-center items-center hover:scale-110 "
            >
              <div
                className=" w-full h-[80%] bg-contain bg-no-repeat  bg-center"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="mt-3`">{p.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-6xl">Loading...</h1>
    </div>
  );
};

export default Home;
