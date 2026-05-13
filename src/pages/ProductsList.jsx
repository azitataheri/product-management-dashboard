import { useEffect, useState } from 'react';
import {api} from '../services/config'
import Loader from '../components/Loader';


function ProductsList() {
  const [products, setProducts] = useState([])


  useEffect(() => {  api.get('/products')
    .then((res)=>{setProducts(res.data); console.log(res.data);
    })}, [])
    

  return (
    <div>
      {!products.length ?  <Loader /> : products.map((product) => <p>{product.name}</p>)}
     </div>
  )
}

export default ProductsList