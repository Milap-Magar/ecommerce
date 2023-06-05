   import axios from "axios"

   export const getProducts = async () => {
      const response = await axios.get('/api/products');
      return response;
   }
   
   export const getCategories = async () => {
      const response = await axios.get('/api/categories');
      console.log(response)
      return response;
  } 