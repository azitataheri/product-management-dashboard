import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import { CiSearch } from "react-icons/ci";


import Loader from "../components/Loader";
import Table from "../components/Table";
import AddModal from "../components/AddModal";
import Pagination from "../components/Pagination";
import styles from "../pages/ProductList.module.css";
import avatar from "../assets/images/avatar.png";
import sort from "../assets/images/sort.png";
import { getProductsList } from "../services/pagination";
import { api } from "../services/config";


function ProductsList() {
  const { products, dispatch } = useProducts();
  const [showAddModal, setShowAddModal] = useState(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1)


  // Get data for pagination
  useEffect(() =>{
    const getData = async() =>{
        const res = await api.get(getProductsList(page))
        
        dispatch({
          type: 'SET_PRODUCTS',
          payload: res.data.data
        })
    }
    getData()
  }, [page])


  // Get username for show in panel
  const username = localStorage.getItem("username");


  // Filtered products
  const filteredProducts = products.filter(
    (product) =>
      product.name.includes(search) ||
      product.price.toString().includes(search) ||
      product.quantity.toString().includes(search) ||
      product.id.toString().includes(search),
  );


  // Add modal
  const addModalHandler = () => {
    setShowAddModal(true);
  };


  return (
    <>
      <div className={styles.header}>
        {/*Search of products*/}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="جستجو کالا"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
        {!filteredProducts.length ? (
          <Loader />
        ) : (
          <Table products={filteredProducts} />
        )}
        {showAddModal && (
          <AddModal dispatch={dispatch} setShowAddModal={setShowAddModal} />
        )}
      </div>

      {/*Pagination*/}
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default ProductsList;
