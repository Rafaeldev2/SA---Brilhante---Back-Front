import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ProductPageContent from './ProductPageContent';

function ProductPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Anel com firulas', tipo: 'Anel', description: 'Descrição do produto', price: 15, quantity: 1 },
    { id: 2, name: 'Brico de uvas', tipo: 'Brinco', description: 'Descrição do produto', price: 25, quantity: 1 },
    { id: 3, name: 'Colar de perolas', tipo: 'Colar', description: 'Descrição do produto', price: 30, quantity: 1 },
    { id: 4, name: 'Conjunto de colar e brincos Persa', tipo: 'Conjunto', description: 'Descrição do produto', price: 40, quantity: 1 },
    { id: 5, name: 'Misanga arco iris', tipo: 'Pulseira', description: 'Descrição do produto', price: 5, quantity: 1 },

    // Adicione mais produtos conforme necessário
  ]);

  const handleQuantityChange = (index, event) => {
    const newProducts = [...products];
    newProducts[index].quantity = parseInt(event.target.value);
    setProducts(newProducts);
  };

  return (
    <ProductPageContent 
      products={products} 
      onQuantityChange={handleQuantityChange} 
    />
  );
}

export default ProductPage;
