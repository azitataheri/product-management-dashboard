import { useState } from "react";
import styles from "../components/AddModal.module.css";
import { addProduct } from "../services/products";

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

      setShowAddModal(null);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAddaHandler = () => {
    setShowAddModal(null);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <p> افزودن محصول جدید</p>
        <form className={styles.form} onSubmit={addHandler}>
          <div className={styles.formFields}>
            <label>نام کالا</label>
            <input
              type="text"
              placeholder="نام کالا"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.formFields}>
            <label>تعداد موجودی</label>
            <input
              type="number"
              placeholder="تعداد موجودی" 
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className={styles.formFields}>
            <label>قیمت</label>
            <input
              type="text"
              placeholder="قیمت"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className={styles.modalBtns}>
            <button type="submit">ابجاد</button>
            <button type="button" onClick={cancelAddaHandler}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddModal;
