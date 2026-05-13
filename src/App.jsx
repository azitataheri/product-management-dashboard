import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage  from './pages/RegisterPage'
import ProductsList  from './pages/ProductsList'
import ProtectedPage from "./components/ProtectedPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={
          <ProtectedPage>
              <ProductsList />
        </ProtectedPage>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
