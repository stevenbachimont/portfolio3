import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider } from './contexte/CartProvider.jsx';
import Head from './components/Head.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import './App.css';

import Checkout from './pages/checkout.jsx';
import Page1 from './pages/page1.jsx';
import Cart from './pages/cart.jsx';

function App() {
    // État du panier
    const [cart, setCart] = useState([]);

    return (
        <CartProvider>
        <Router>
            <Head />
            <Routes>
                <Route path="/" element={<Main cart={cart} setCart={setCart} />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            </Routes>
            <Footer />
        </Router>
        </CartProvider>
    );
}

export default App;
