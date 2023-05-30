import FeaturedProduct from "@/components/FeaturedProducts";
import Navbar from "@/Components/Navbar";
import NewProduct from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({products, product}) {
 
  return (
    <>
      <Navbar/>
      {product && <FeaturedProduct product={product} />}
      {products?.length > 0 && <NewProduct products={products} />}
    </>
  );
}
export async function getServerSideProps() {
  const featuredProductId = '64731802de2c9386190cbc62';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });

  return {
    props: {
      product: JSON.parse(JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
// const [product, setProduct] = useState({
//   "_id": "64731802de2c9386190cbc62",
//   "title": "Camera",
//   "description": "GreatCamera",
//   "price": 270,
//   "images": [
//     "https://res.cloudinary.com/face-images-kann/image/upload/v1684912591/dmg19gitmz4vlsr2xszo.jpg"
//   ],
//   "category": "64731791de2c9386190cbc4b",
//   "createdAt": "2023-05-28T08:59:46.416+00:00",
//   "updatedAt": "2023-05-24T07:16:38.795Z",
//   "__v": 0
// })