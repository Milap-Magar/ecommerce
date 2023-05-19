import Layout from '@/components/Layout'
import React from 'react'

const newProduct = () => {
  return (
    <Layout>
    <form className="flex flex-col p-3 w-full">
        <label className="py-1">Product Name</label>
          <input type="name" placeholder="Enter the product name" className="py-3" />
          <select className="py-2">
            <option value={""}>Uncategorized</option> 
            <option value={""}>Electronices</option>
          </select>
          <label className="py-2">Photos</label>
          <div className="mb-2 flex flex-wrap">
            <div className="w-20 h-20 cursor-pointer flex justify-center items-center bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
              <input type="file" className="py-4 hidden"/>
          </div>
          <label>Description</label>
          <textarea placeholder="Product description" className="w-full "/>
          <label>Price</label>
          <input type="number" placeholder="Product Price" />
      <button className="border w-20 h-8 rounded-lg mt-3 border-pink-600 hover:bg-pink-900 ">Save</button> 
      </form>
    </Layout>
  )
}

export default newProduct