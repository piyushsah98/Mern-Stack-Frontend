import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import axios from 'axios';
import { MyShop } from './context/MyContext'
import ProductsCard from './components/ProductsCard';

const App = () => {
  const [productsData, setProductsData] = useState([]);

  const { isCartOpen, cartItems } = useContext(MyShop);

  const getData = async () => {
    try {
      const data = await axios('https://api.escuelajs.co/api/v1/products');
      setProductsData(data.data);

    } catch (error) {
      console.log('api error- ', error)
    }
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div className='w-full min-h-screen flex flex-col gap-5 bg-[#0F172A] text-white'>
      <Navbar />

      {isCartOpen ?
        <CartPage /> :
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 pb-4'>
          {productsData.map((product) => {
            const isInCart = cartItems.find((val) => product.id === val.id);
            console.log(isInCart) 

            return <ProductsCard key={product.id} product={product} isInCart={isInCart} />
          })}
        </div>
      }
    </div>
  )
}

export default App