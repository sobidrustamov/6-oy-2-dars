import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Login } from "./pages/auth/login";
import { ProductList } from "./pages/product/product-list";
import { EditProduct } from "./pages/product/edit-product";
import { CreateProduct } from "./pages/product/create-product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<ProductList />} />
          <Route path="create" element={<CreateProduct />} />
          <Route path="edit" element={<EditProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
