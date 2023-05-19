import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";

const categories = () => {
  useEffect

  const [name, setName] = useState();
  const[parentCategory, setParentCategories] = useState();
  const[category, setCategories] = useState();
  const save = () =>{

  }
  return (
    <Layout>
      <div className="px-3">
      <h1>Category</h1>
      <form onSubmit={save}>
        <div className="">
          <input type="categories name" onChange={(e=>setName(e.target.name))} />
          <select onChange={(e)=>setParentCategories(e.target.value)} value={parentCategory}>
            <option>
              No Parent Category
            </option>
            {
              categories.length > 0 &&
              categories.map((categories)=>{
              return <option key={categories._id} value={categories._id}>{categories.name}</option>
            })
            }
          </select>
          <button className="rounded-lg border border-pink-800 p-1 hover:bg-pink-600 my-2">Submit</button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default categories;
