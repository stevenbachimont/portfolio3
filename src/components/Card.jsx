
import './Card.css';
import StarRating from './StarRating.jsx';
import styles from './Card.module.css';

// eslint-disable-next-line react/prop-types
function Card({ image, title, description, rating_rate }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2 className={styles.violetColor}>{title}</h2>
            <p>{description}</p>
            <StarRating rating={rating_rate} />
        </div>
    );
}

export default Card;


