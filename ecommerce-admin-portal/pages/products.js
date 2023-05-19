import Layout from '@/components/Layout'
import { getProducts } from '@/services/axios.service';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const response = getProducts();
        //console.log(response)
        setProducts(response.data);

    })
  return (
    <Layout>
        <Link href={"/products/new"} className=''>
            <button className='rounded-lg border border-pink-600 hover:bg-pink-600 p-2 m-6'>Add New Product</button>
            </Link>
        <table>
            <thead>
                <tr>
                    <td>Product name</td>
                    <td>Product price</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((product)=> {
                        return <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </Layout>
  )
}

export default products