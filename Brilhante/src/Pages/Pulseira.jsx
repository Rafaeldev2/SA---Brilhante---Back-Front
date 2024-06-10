import React, { useContext, useState } from 'react';
import { BrilhanteContext } from "../Context/GlobalContext"

function Pulseira() {
  const { renderProductCards, products, handleQuantityChange } = useContext(BrilhanteContext);

  return (
    <>
      <div className='home-container'>
      <h1>Bracelet Page</h1>
        {renderProductCards(products, handleQuantityChange)}
      </div>
    </>
  );
}

export default Pulseira;