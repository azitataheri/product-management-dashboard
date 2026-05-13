import styles from '../components/Table.module.css'


function Table({products}) {
  return (
    <table className={styles.table}>
      <tr>
        <th>نام کالا</th>
        <th>موجودی </th>
        <th>قیمت</th>
        <th>شناسه کالا</th>
      </tr>
          {products.map((product) => 
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>{product.id}</td>
          </tr>
          )}
    </table>
  );
}

export default Table;
