import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoice from "./pages/Invoice";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Customers from "./pages/Customers";
import Auth from "./pages/Auth";
import CreateProduct from "./pages/CreateProduct";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/product" element={<Products />} />
                        <Route path="/product/create-product" element={<CreateProduct />} />
                        <Route path="/invoice" element={<Invoice />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/customer" element={<Customers />} />
                        <Route path="/build/auth" element={<Auth />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
