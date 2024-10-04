import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './Card.module.css';

function StarRating({ rating }) {
    const [hover, setHover] = useState(null);

    return (
        <div className="star-rating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            readOnly
                        />
                        <FontAwesomeIcon
                            icon={faStar}
                            className={ratingValue <= (hover || rating) ? styles.goldColor : styles.grayColor}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default StarRating;
