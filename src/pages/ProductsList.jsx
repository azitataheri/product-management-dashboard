import Loader from "../components/Loader";
import Table from "../components/Table";
import { useProducts } from "../context/ProductContext";



function ProductsList() {
  const {products} = useProducts()
console.log('products:', products);

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
