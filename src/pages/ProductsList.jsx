import { useState } from "react";
import { useProducts } from "../context/ProductContext";

import Loader from "../components/Loader";
import Table from "../components/Table";
import AddModal from "../components/AddModal";
import styles from "../pages/ProductList.module.css";

function ProductsList() {
  const { products, dispatch } = useProducts();
  const [showAddModal, setShowAddModal] = useState(null);

  const addModalHandler = () => {
    setShowAddModal(true);
  };
  return (
    <>
      <div className={styles.header}></div>
      <div className={styles.productTable}>
        <div className={styles.actions}>
          <button>sort</button>
          <button onClick={addModalHandler}>افزودن محصول</button>
        </div>
        {!products.length ? <Loader /> : <Table products={products} />}
        {showAddModal && (
          <AddModal dispatch={dispatch} setShowAddModal={setShowAddModal} />
        )}
      </div>
    </>
  );
}

export default ProductsList;
