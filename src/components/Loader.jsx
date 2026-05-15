import { RotatingLines } from "react-loader-spinner"
import styles from '../components/loader.module.css'


function Loader() {
  return (
      <div className={styles.loader}>
        <RotatingLines width="100px" height="100px" strokeColor="#55A3F0" strokeWidth="3" />
    </div>
  )
}

export default Loader