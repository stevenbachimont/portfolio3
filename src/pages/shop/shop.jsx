import { useState, useEffect } from 'react';
import styles from "./Shop.module.css";
import Card from '../../components/cards/Card.jsx';


function Shop({ cart, setCart }) {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        {/*fetch(${import.meta.env.VITE_API_URL}/api/projects)*/}
        fetch(`https://api.stevenbachimont.com/api/projects`)
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                const uniqueCategories = [...new Set(data.map(project => project.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const filteredProjects = projects.filter(project =>
        selectedCategory === '' || project.category === selectedCategory
    );

    return (
        <>
            <div className={styles.title}>
                <h1>Bienvenue dans notre Marketplace</h1>
                <p>Explorez nos projets et ajoutez-les à votre panier !</p>
            </div>

            <div className={styles.selector}>
            <select onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className={styles.cards}>
                {filteredProjects.map(project => (
                    <Card key={project.id} {...project} addToCart={() => addToCart(project)} />
                ))}
            </div>

            <div className={styles.bottom}>
                <p>Pensez à valider votre panier !!</p>
            </div>
        </>
    );
}

export default Shop;
