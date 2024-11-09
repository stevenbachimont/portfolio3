import React, { createContext, useState, useEffect, useContext } from 'react';

// Crée un contexte pour le panier
export const CartContext = createContext();

// Composant CartProvider pour encapsuler l'état du panier
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Charger le panier depuis le localStorage au démarrage
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Sauvegarder le panier dans le localStorage quand il change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => {
    return useContext(CartContext);
};
