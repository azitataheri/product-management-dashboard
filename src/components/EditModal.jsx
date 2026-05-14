import { useEffect, useState } from "react";
import styles from "../components/EditModal.module.css";
import { updateProduct } from "../services/products";

function EditModal({
  setEditingProduct,
  editingProduct,
  dispatch,
  setShowEditModal,
}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setQuantity(editingProduct.quantity);
    }
  }, [editingProduct]);

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = {
        id: editingProduct.id,
        name,
        price,
        quantity,
      };

      await updateProduct(editingProduct.id, updatedProduct);

      dispatch({
        type: "EDIT_PRODUCT",
        payload: updatedProduct,
      });

      setEditingProduct(null);
      setShowEditModal(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  const cancelEditHandler = () => {
    setShowEditModal(false);
  };
  return (
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={updateHandler}>
        <label>نام کالا</label>
        <input
          type="text"
          placeholder="نام کالا"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> تعداد موجودی</label>
        <input
          type="number"
          placeholder="موجودی"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label>قیمت</label>
        <input
          type="text"
          placeholder="قیمت"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="">
          <button type="submit">ثبت اطلاعات جدید</button>
          <button type="button" onClick={cancelEditHandler}>
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditModal;
