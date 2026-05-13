import styles from '../components/DeleteModal.module.css'

function Modal({ setSelectId, setShowDeleteModal, dispatch, selectId }) {
  const confirmDelete = () => {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: selectId,
    });

    setShowDeleteModal(false);
    setSelectId(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectId(null);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <p>ایا از حذف این محصول مطمین هستید؟</p>
        <button onClick={confirmDelete}>بله</button>
        <button onClick={cancelDelete}>خیر</button>
      </div>
    </div>
  );
}

export default Modal;
