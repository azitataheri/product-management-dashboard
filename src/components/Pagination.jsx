import styles from '../components/Pagination.module.css'
function Pagination({page, setPage}) {
  return (
    <div className={styles.pagination}>
        <button onClick={() => setPage(1)} className={page === 1 ? styles.selected : ''}>1</button>
        <button onClick={() => setPage(2)}  className={page === 2 ? styles.selected : ''}>2</button>
        <button onClick={() => setPage(3)}  className={page === 3 ? styles.selected : ''}>3</button>
    </div>
  )
}

export default Pagination