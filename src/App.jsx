import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './contexte/CartProvider.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { useTranslation } from 'react-i18next';
import './i18n';

import styles from "./App.module.css";
import Checkout from './pages/checkout/checkout.jsx';
import Home from "./pages/home/home.jsx";
import Shop from './pages/shop/shop.jsx';
import Cart from './pages/cart/cart.jsx';

function App() {
    const [cart, setCart] = useState([]);
    const { t } = useTranslation();

    return (
        <div className={styles.App}>
            <CartProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
                        <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                    </Routes>
                    
                </Router>
            </CartProvider>
        </div>
            );
            }

            export default App;
