import { useEffect, useState } from "react";
import { api } from "../services/config";
import Loader from "../components/Loader";
import Table from "../components/Table";

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* {!products.length ? (
        <Loader />
      ) : (
        products.map((product) => <p key={product.id}>{product.name}</p>)
      )} */}
      {!products.length ? <Loader /> : <Table products={products}/>}
    </div>
  );
}

export default ProductsList;
