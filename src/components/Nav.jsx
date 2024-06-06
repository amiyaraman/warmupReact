import React from 'react';

const Nav = () => {
  return       <nav className="pt-5  bg-zinc-100 w-[15%] h-full  flex flex-col items-center ">
  <a
    className="px-2 py-3 rounded border border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-white ease-in duration-[375ms] "
    href="/create"
  >
    Add New Product
  </a>

  <hr className="my-3  w-[80%] h-[2px] bg-red-700 " />
  <h1 className="text-2xl mb-3 w-[80%] ">Category Filter</h1>
  <ul className=" w-[80%] ">
    <li className="flex items-center mb-3">
      <span className=" rounded-full mr-2 inline-block h-[15px] w-[15px] bg-red-300" />
      Cat1
    </li>
    <li className="flex items-center mb-3">
      <span className=" rounded-full mr-2 inline-block h-[15px] w-[15px] bg-green-300" />
      Cat2
    </li>
    <li className="flex items-center mb-3">
      <span className=" rounded-full mr-2 inline-block h-[15px] w-[15px] bg-yellow-300" />
      Cat3
    </li>
  </ul>
</nav>;
};

export default Nav;
