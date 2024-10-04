
import './Card.css';
import StarRating from './StarRating.jsx';
import styles from './Card.module.css';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ image, title, description, rating_rate }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2 className={styles.violetColor}>{title}</h2>
            <p>{description}</p>
            <StarRating rating={rating_rate} />
            <Link to="/page1">
                <button className={styles.addToCartButton}>Add to Cart</button>
            </Link>
        </div>
    );
}

export default Card;


