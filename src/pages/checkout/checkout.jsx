import React, { useState } from 'react';
import { useCart } from '../../contexte/CartProvider.jsx';
import './checkout.css';

function Checkout() {
    const { cart } = useCart();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState(''); // État pour l'heure
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const skillsList = cart.map(item => item.title).join(', ');

        const emailSubject = `Nouveau RDV téléphonique de ${formData.name}`;
        const emailBody = `
            Nom: ${formData.name}
            Email: ${formData.email}
            Téléphone: ${formData.phone}
            Compétences sélectionnées: ${skillsList}
            RDV proposé le: ${selectedDate} à ${selectedTime}
        `;

        const mailtoLink = `mailto:contact@stevenbachimont.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className="checkout-container">
            <div className="order-summary">
                <h2>Récapitulatif de la commande</h2>
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img className="cart-item-image" src={item.image} alt={item.title} />
                                <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="checkout-form">
                <h2>Prenons rendez-vous</h2>
                <p>J'ai sélectionné les compétences ci-contre et je propose un RDV téléphonique le :</p>

                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    required
                />
                <input
                    type="time"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    required
                />

                <form onSubmit={handleSubmit}>
                    <label className="checkout-label">
                        Nom :
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label className="checkout-label">
                        Email :
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                        />
                    </label>
                    <label className="checkout-label">
                        Téléphone :
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            required
                        />
                    </label>

                    <button type="submit">Confirmer le RDV</button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
