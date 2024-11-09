import React, { useContext } from 'react';
import { CartContext } from '../contexte/CartProvider'; // Assurez-vous que le chemin est correct
import './Card.css';
import StarRating from './StarRating.jsx';
import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({ id, image, title, description, rating_rate }) {
    const { addToCart } = useContext(CartContext);  // Utilisation de useContext pour accéder à addToCart

    // Fonction pour ajouter un projet au panier
    const handleAddToCart = () => {
        const project = { id, image, title, description, rating_rate };
        addToCart(project);
    };

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2 className={styles.violetColor}>{title}</h2>
            <p>{description}</p>
            <StarRating rating={rating_rate} />
            <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default Card;
