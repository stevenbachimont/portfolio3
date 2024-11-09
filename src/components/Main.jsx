import { useState, useEffect } from 'react';
import "/src/components/Main.css";
import Card from './Card.jsx';
import styles from "./Card.module.css";

function Main({ cart, setCart }) {
    // State pour stocker les projets
    const [projects, setProjects] = useState([]);
    // State pour stocker les catégories uniques disponibles
    const [categories, setCategories] = useState([]);
    // State pour la catégorie sélectionnée par l'utilisateur
    const [selectedCategory, setSelectedCategory] = useState('');

    // useEffect qui s'exécute une fois au chargement du composant
    useEffect(() => {
        {/*fetch(${import.meta.env.VITE_API_URL}/api/projects)*/}
        fetch(`https://api.stevenbachimont.com/api/projects`)
            .then(response => response.json())
            .then(data => {
                // On met à jour l'état des projets avec les données reçues
                setProjects(data);

                // On extrait les catégories uniques à partir des projets et on les stocke
                const uniqueCategories = [...new Set(data.map(project => project.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    // Fonction pour gérer le changement de catégorie sélectionnée
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // Fonction pour ajouter un projet au panier
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // Filtrage des projets en fonction de la catégorie sélectionnée
    const filteredProjects = projects.filter(project =>
        selectedCategory === '' || project.category === selectedCategory
    );

    return (
        <>
            {/* Conteneur de titre */}
            <div className="title-container">
                <h1>Bienvenue dans notre Marketplace</h1>
            </div>

            {/* Sélecteur de catégorie */}
            <div className="category-selector">
                <select onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            {/* Conteneur pour les cartes de projets filtrés */}
            <div className="card-container">
                {filteredProjects.map(project => (
                    // Passe la fonction addToCart en prop à chaque composant Card
                    <Card key={project.id} {...project} addToCart={() => addToCart(project)} />
                ))}
            </div>

            {/* Conteneur du bas */}
            <div className="bottom-container">
                <p>Explorez nos projets et ajoutez-les à votre panier !</p>
            </div>
        </>
    );
}

export default Main;
