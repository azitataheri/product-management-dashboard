import { createContext, useEffect, useContext, useReducer } from "react";
import { api } from "../services/config";

const ProductContext = createContext();

// Initial state
const initialState = {
  products: [],
};

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };

    case "EDIT_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product,
        ),
      };

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return state;
  }
};

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Get products
  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        dispatch({
          type: "SET_PRODUCTS",
          payload: res.data.data,
        });
        localStorage.setItem('products', JSON.stringify(res.data.data))
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

// Custome hook
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductProvider;
// eslint-disable-next-line react-refresh/only-export-components
export { useProducts };
