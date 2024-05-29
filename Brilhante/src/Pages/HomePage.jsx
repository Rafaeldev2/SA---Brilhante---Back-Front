// import React, {useState, useContext} from 'react'
// import {ProductCard} from '../Components/card.jsx'
// import { BrilhanteContext } from '../Context/GlobalContext'
// import './HomePage.css'
// import CustomInput from '../Components/CustomInput'

// const HomePage = () => {
//   const { produtos, setProdutos } = useContext(BrilhanteContext)
//   const [searchQuery, setSearchQuery] = useState('')

//   const deletarProduto = (index) => {
//     const atualizarProdutos = [...produtos]
//     atualizarProdutos.splice(index, 1)
//     setProdutos(atualizarProdutos)
//   }

//   const fracionarProduto = (index, factor) => {
//     const atualizarProdutos = [...produtos]
//     const produtoAtualizado = { ...atualizarProdutos[index] }

//     produtoAtualizado.nomeProduto = produtoAtualizado.nomeProduto.map(nomeProduto => ({
//       ...nomeProduto,
//       quantidade: nomeProduto.quantidade * factor
//     }))

//     atualizarProdutos[index] = produtoAtualizado
//     setProdutos(atualizarProdutos)
//   }

//   const produtosFiltrados = produtos.filter(produtos =>
//     produtos.nome.toLowerCase().includes(searchQuery.toLowerCase())
//   )

//   return (
//     <>
//       <div className="produto-list">
//           <CustomInput
//             className="search-input"
//             placeholder="Pesquisar Produtos"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           {produtosFiltrados.map((produtos, index) => (
//             <ProductCard 
//               key={index} 
//               index={index} 
//               produtos={produtos} 
//               deletarProduto={deletarProduto} 
//               fracionarProduto={fracionarProduto} 
//             />
//           ))}
//       </div>
//     </>
//   );
// }

// export default HomePage;