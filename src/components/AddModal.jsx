import { useState } from "react";
import styles from "../components/AddModal.module.css";
import {addProduct} from "../services/products";

function AddModal({ dispatch, setShowAddModal }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addHandler = async (e) => {
    e.preventDefault();

    const newProduct = { name, price, quantity };

    try {
      const res = await addProduct(newProduct);

      dispatch({
        type: "ADD_PRODUCT",
        payload: res.data,
      });

      
      setShowAddModal(null)
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAddaHandler = () => {
    setShowAddModal(null)
  }
  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={addHandler}>
        <label>نام کالا</label>
        <input
          type="text"
          placeholder="نام کاربر"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>تعداد موجودی</label>
        <input
          type="number"
          placeholder="نام کاربر"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label>قیمت</label>
        <input
          type="text"
          placeholder="نام کاربر"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="">
          <button type="submit">ابجاد</button>
          <button type="button" onClick={cancelAddaHandler}>انصراف</button>
        </div>
      </form>
    </div>
  );
}

export default AddModal;
