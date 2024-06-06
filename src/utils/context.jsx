import React, { createContext, useEffect, useState } from 'react';

import axiosInstance from '/src/utils/axiosInstance';

export const ProductContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await axiosInstance('/products');
      console.log(data);
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <ProductContext.Provider value={[product, setProduct]}>
        {props.children}
      </ProductContext.Provider>
    </>
  );
};
export default Context;
