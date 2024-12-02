import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import axios  from 'axios'
import { set } from 'react-hook-form'


function App() {
  const [products,setProducts] = useState()
  const getP  = ()=>{
    const api = "https://fakestoreapi.com/products"
    axios.get(api).then((pro)=>{
      console.log(pro)
      setProducts(pro.data)
    }).catch((err)=>console.log(err))
  }

  const addP = ()=>{
    const api = "https://fakestoreapi.com/products"
    axios.post(api,{
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'

    }).then((res)=>{
      console.log(res)
    }).catch((err)=>console.log(err))

  }

  return (
     
    <div  className="pt-[5%] pl-[5%]">
      <button onClick={getP} className="rounded px-5 py-2 bg-red-300">Click</button>

    </div>
   
   

  )
}

export default App
