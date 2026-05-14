import styles from "../components/Table.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useProducts } from "../context/ProductContext";
import { useState } from "react";
import DeleteModal from "../components/DeleteModal";
import EditModal from "./EditModal";

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
          <th> عملیات</th>
        </tr>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.id}</td>
            <td>
              <button onClick={() => deleteHandler(product.id)}>
                <RiDeleteBinLine />
              </button>
              <button onClick={() => editHandler(product)}>
                <FiEdit />
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
