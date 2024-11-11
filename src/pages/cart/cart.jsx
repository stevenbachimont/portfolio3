import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexte/CartProvider.jsx';
import styles from './Cart.module.css';

function Cart() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    const handleRemove = (id) => {
        removeFromCart(id);
    };

    return (
        <div className={styles.container}>
            <h2>Your Skills Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </li>
                    ))}
                    <button className={styles.checkout} onClick={() => navigate('/checkout')}>Checkout</button>
                </ul>

            )}
        </div>
    );
}

export default Cart;
