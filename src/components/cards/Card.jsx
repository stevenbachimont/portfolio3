import React, { useContext } from 'react';
import { CartContext } from '../../contexte/CartProvider.jsx';
import './Card.css';
import StarRating from '../StarRating.jsx';
import styles from '../Card.module.css';

function Card({ id, image, title, description, rating_rate }) {
    const { cart, addToCart } = useContext(CartContext);

    const isInCart = cart.some(item => item.id === id);

    const handleAddToCart = () => {
        if (!isInCart) {
            const project = { id, image, title, description, rating_rate };
            addToCart(project);
        }
    };

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2 className={styles.violetColor}>{title}</h2>
            <p>{description}</p>
            <StarRating rating={rating_rate} />
            <button
                className={styles.addToCartButton}
                onClick={handleAddToCart}
                disabled={isInCart}
            >
                {isInCart ? "Added" : "Add to Cart"}
            </button>
        </div>
    );
}

export default Card;
