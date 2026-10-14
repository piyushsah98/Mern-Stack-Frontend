import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import MemoryLeak from "./MemoryLeak";

const App = () => {
  console.log('app rendering...')
  const [products, setProducts] = useState([]);
  const [toggle, settoggle] = useState(true)

  const getProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col gap-10 p-6 bg-zinc-900 text-white">
      {/* {products.map((product) => (
        <Card key={product.id} product={product} />
      ))} */}

      {toggle ?
        <div className="text-6xl">
          Hello
        </div> :
        <MemoryLeak />
      }

      <button className="bg-blue-600 px-3 py-2 rounded w-fit h-fit" onClick={() => settoggle(prev => !prev)}>Click me</button>
    </div>
  );
};

export default App;