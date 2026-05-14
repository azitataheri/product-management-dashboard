import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductsList from "./pages/ProductsList";
import ProtectedPage from "./components/ProtectedPage";
import ProductProvider from "./context/ProductContext";


function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/products"
            element={
              <ProtectedPage>
                <ProductsList />
              </ProtectedPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
