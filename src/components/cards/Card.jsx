import { useContext, useState } from 'react';
import { CartContext } from '../../contexte/CartProvider.jsx';
import StarRating from '../StarRating.jsx';
import styles from './Card.module.css';
import { useTranslation } from "react-i18next";

function Card({ id, image, title, description, rating_rate }) {
    const { cart, addToCart } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation();

    const isInCart = cart.some(item => item.id === id);

    const handleAddToCart = (e) => {
        e.stopPropagation(); // Empêche l'ouverture de la modal lors du clic sur le bouton
        if (!isInCart) {
            const project = { id, image, title, description, rating_rate };
            addToCart(project);
        }
    };

    return (
        <>
            <div className={styles.card} onClick={() => setIsModalOpen(true)}>
                <img src={image} alt={title} />
                <h2 className={styles.violetColor}>{title}</h2>
                <button
                    className={styles.addToCartButton}
                    onClick={handleAddToCart}
                    disabled={isInCart}
                >
                    {isInCart ? t('card.added') : t('card.addToCart')}
                </button>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button 
                            className={styles.closeButton}
                            onClick={() => setIsModalOpen(false)}
                        >
                            ×
                        </button>
                        <div className={styles.modalContent}>
                            <img src={image} alt={title} className={styles.modalImage} />
                            <div className={styles.modalInfo}>
                                <h2>{title}</h2>
                                <StarRating rating={rating_rate} />
                                <p className={styles.description}>{description}</p>
                                <button
                                    className={styles.addToCartButton}
                                    onClick={handleAddToCart}
                                    disabled={isInCart}
                                >
                                    {isInCart ? t('card.added') : t('card.addToCart')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;
