import { useState, useEffect } from 'react';
import "/src/components/Main.css";
import Card from './Card.jsx';
import styles from "./Card.module.css";

function Main() {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/projects`)
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

    const filteredProjects = projects.filter(project =>
        selectedCategory === '' || project.category === selectedCategory
    );

    return (
        <>
            <div className="title-container">

            </div>

            <div className="category-selector">
                <select onChange={handleCategoryChange} value={selectedCategory}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="card-container">
                {filteredProjects.map(project => (
                    <Card key={project.id} {...project} />
                ))}
            </div>
            <div className="bottom-container">
            </div>
        </>
    );
}

export default Main;
