import styles from '../components/DeleteModal.module.css'
import close from '../assets/images/close.png'
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
        <img src={close} alt='close image'/>
        <p>آیا از حذف این محصول مطمئنید؟</p>
        <div className={styles.deleteBtns}>          
          <button onClick={confirmDelete}>بله</button>
          <button onClick={cancelDelete}>لغو</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
