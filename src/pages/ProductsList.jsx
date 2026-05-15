import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { CiSearch } from "react-icons/ci";

import Loader from "../components/Loader";
import Table from "../components/Table";
import AddModal from "../components/AddModal";
import styles from "../pages/ProductList.module.css";
import avatar from "../assets/images/avatar.png";
import sort from "../assets/images/sort.png";

function ProductsList() {
  const { products, dispatch } = useProducts();
  const [showAddModal, setShowAddModal] = useState(null);
  const username = localStorage.getItem("username");
  const addModalHandler = () => {
    setShowAddModal(true);
  };
  return (
    <>
      <div className={styles.header}>
        {/*Search of products*/}
        <div className={styles.search}>
          <input type="text" placeholder="جستجو کالا" />
          <span>
            <CiSearch />
          </span>
        </div>

        {/* Avatar */}
        <div className={styles.avatarBox}>
          <span className={styles.avatar}>
            <img src={avatar} alt="user profile picture" />
          </span>
          <div className="">
            <ul>
              <li>
                <span className={styles.username}> {username}</span>
              </li>
              <li>کاربر</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.productTable}>
        <div className={styles.actions}>
          <div>
            <img src={sort} />
            <span>مدیریت کالا</span>
          </div>
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
