import Layout from '@/components/Layout'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const orders = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () =>{
  const resp = await axios.get("/api/orders")
      return resp;   
    }
  
  useEffect(()=>{
    getOrders();
    },[])

  return (
    <Layout>
      <div className='w-full bg-pink-100 p-4'>
      <h1 className='text-xl text-pink-700 bg-inherit'>Orders</h1>
        <table className='basic p-5 my-4'>
          <thead>
            <tr className=' font-bold'>
              <td>Order name</td>
              <td>Order price</td>
              <td>Order time</td>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default orders