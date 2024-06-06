import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/context';

const Home = () => {
  const [product] = useContext(ProductContext);
  return product ? (
    <>
      <Nav />
      <div className="h-full w-[85%]  p-5 pt-[2%] flex flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
        {product.map((p, i) => {
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
