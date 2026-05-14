import { useState } from "react";
import Loader from "../components/Loader";
import Table from "../components/Table";
import { useProducts } from "../context/ProductContext";
import AddModal from "../components/AddModal";

function ProductsList() {
  const { products , dispatch} = useProducts();
  const [showAddModal, setShowAddModal] = useState(null);

  const addModalHandler = () => {
    setShowAddModal(true);
  };
  return (
    <div>
      {/* {!products.length ? (
        <Loader />
      ) : (
        products.map((product) => <p key={product.id}>{product.name}</p>)
      )} */}
      <button onClick={addModalHandler}>افزودن محصول</button>
      {!products.length ? <Loader /> : <Table products={products} />}
      {showAddModal && <AddModal dispatch={dispatch} setShowAddModal={setShowAddModal} />}
    </div>
  );
}

export default ProductsList;
