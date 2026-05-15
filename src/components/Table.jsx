import styles from "../components/Table.module.css";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";
import DeleteModal from "../components/DeleteModal";
import EditModal from "./EditModal";

import trash from "../assets/images/trash.png";
import edit from "../assets/images/edit.png";
function Table() {
  const { products, dispatch } = useProducts();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectId, setSelectId] = useState(null);

  const deleteHandler = (id) => {
    setSelectId(id);
    setShowDeleteModal(true);
  };

  const editHandler = (product) => {
    setShowEditModal(true);
    setEditingProduct(product);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <tr>
          <th>نام کالا</th>
          <th>موجودی </th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th> </th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.id}</td>
            <td className={styles.operation}>
              <button onClick={() => editHandler(product)}>
                <img src={edit}/>
              </button>
              <button onClick={() => deleteHandler(product.id)}>
               <img src={trash}/>
              </button>
            </td>
          </tr>
        ))}
      </table>

      {/** Delete modal */}
      {showDeleteModal && (
        <DeleteModal
          selectId={selectId}
          setSelectId={setSelectId}
          setShowDeleteModal={setShowDeleteModal}
          dispatch={dispatch}
        />
      )}

      {/**Edit modal */}
      {showEditModal && (
        <EditModal
          editingProduct={editingProduct}
          setEditingProduct={setEditingProduct}
          dispatch={dispatch}
          setShowEditModal={setShowEditModal}
        />
      )}
    </div>
  );
}

export default Table;
