import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axiosInstance from '/src/utils/axiosInstance';

const Details = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axiosInstance(`/products/${id}`);
      console.log(data);
      setProd(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  return prod ? (
    <>
      <div className="w-[70%] h-full m-auto p-[10%] flex justify-between items-center">
        <img
          className=" h-[80%] w-[40%] object-contain"
          src={`${prod.image}`}
          alt=""
        />
        <div className="content w-[50%]">
          <h1 className="text-2xl ">{prod.title}</h1>
          <h3 className="text-zinc-400 my-3">{prod.category}</h3>
          <h2 className="text-red-400 mb-2">{prod.price}</h2>
          <p>{prod.description}</p>
          <div className=" w-[40%] flex justify-between mt-[5%] ">
            <Link className="px-3 py-2 mr-3 rounded border border-red-400 text-red-400 hover:bg-red-400 hover:text-white ease-in duration-[375ms]">
              Delete
            </Link>
            <Link className="px-3 py-2 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white ease-in duration-[375ms]">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-6xl">Loading...</h1>
    </div>
  );
};

export default Details;
