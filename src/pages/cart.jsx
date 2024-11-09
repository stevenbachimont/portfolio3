import React from 'react';
import { useCart } from '../contexte/CartProvider';
import './styles/cart.css';

function Cart() {
    const { cart, removeFromCart } = useCart(); // Utilisation du hook personnalisé

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;
