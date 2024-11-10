import React, { useContext } from 'react';
import { CartContext } from '../contexte/CartProvider'; // Assurez-vous que le chemin est correct
import './styles/checkout.css';

function Checkout() {
    const { cart } = useContext(CartContext);

    return (
        <div className="checkout-container">
            {/* Récapitulatif de la commande */}
            <div className="order-summary">
                <h2>Récapitulatif de la commande</h2>
                {cart.length > 0 ? (
                    cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Votre panier est vide.</p>
                )}
            </div>

            {/* Formulaire d'informations client */}
            <div className="checkout-form">
                <h2>Informations client</h2>
                <form>
                    <label htmlFor="name">Nom complet</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Adresse email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="address">Adresse</label>
                    <input type="text" id="address" name="address" required />

                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label htmlFor="message">Message (facultatif)</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Confirmer la commande</button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
