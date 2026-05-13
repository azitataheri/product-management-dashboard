import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage  from './pages/RegisterPage'
import ProductsList  from './pages/ProductsList'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsList />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
