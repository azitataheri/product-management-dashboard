// import { useEffect, useState } from "react";
// import styles from "../components/EditModal.module.css";
// import { updateProduct } from "../services/products";

// function EditModal({
//   setEditingProduct,
//   editingProduct,
//   dispatch,
//   setShowEditModal,
// }) {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [quantity, setQuantity] = useState("");

//  useEffect(() => {
//     if (editingProduct) {
//       setName(editingProduct.name || "");
//       setPrice(editingProduct.price ?? "");
//       setQuantity(editingProduct.quantity ?? "");
//     }
//   }, [editingProduct]);

//   const updateHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const updatedProduct = {
//         id: editingProduct.id,
//         name,
//         price: Number(price),
//         quantity: Number(quantity),
//       };

//       await updateProduct(editingProduct.id, updatedProduct);

//       dispatch({
//         type: "EDIT_PRODUCT",
//         payload: updatedProduct,
//       });

//       setEditingProduct(null);
//       setShowEditModal(false);
//     } catch (error) {
//       console.log(error?.response?.data || error.response || error);
//     }
//   };

//   const cancelEditHandler = () => {
//     setShowEditModal(false);
//   };
//   return (
//     <div className={styles.modal}>
//       <div className={styles.modalBox}>
//         <p>ویرایش اطلاعات</p>
//         <form className={styles.form} onSubmit={updateHandler}>
//           <div className={styles.formFields}>
//             <label>نام کالا</label>
//             <input
//               type="text"
//               placeholder="نام کالا"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className={styles.formFields}>
//             <label> تعداد موجودی</label>
//             <input
//               type="number"
//               placeholder="موجودی"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//             />
//           </div>
//           <div className={styles.formFields}>
//             <label>قیمت</label>
//             <input
//               type="text"
//               placeholder="قیمت"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>

//           <div className={styles.modalBtns}>
//             <button type="submit">ثبت اطلاعات جدید</button>
//             <button type="button" onClick={cancelEditHandler}>
//               انصراف
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditModal;


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
      setName(editingProduct.name || "");
      setPrice(editingProduct.price ?? "");
      setQuantity(editingProduct.quantity ?? "");
    }
  }, [editingProduct]);

  const updateHandler = async (e) => {
    e.preventDefault();

    try {
      const updatedProduct = {
        id: editingProduct.id,
        name,
        price: Number(price),
        quantity: Number(quantity),
      };

      await updateProduct(editingProduct.id, updatedProduct);

      dispatch({
        type: "EDIT_PRODUCT",
        payload: updatedProduct,
      });

      setEditingProduct(null);
      setShowEditModal(false);
    } catch (error) {
      console.log(error?.response?.data || error.response || error);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <p>ویرایش اطلاعات</p>
        <form className={styles.form} onSubmit={updateHandler}>
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
              placeholder="موجودی"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className={styles.formFields}>
            <label>قیمت</label>
            <input
              type="number"
              placeholder="قیمت"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className={styles.modalBtns}>
            <button type="submit">ثبت اطلاعات جدید</button>
            <button type="button" onClick={() => setShowEditModal(false)}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;