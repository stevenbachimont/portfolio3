import { Link } from 'react-router-dom';
import "/src/components/Head.css";

function Head() {
    return (
        <nav>
            <Link to="/" className="headTitle">shopfolio</Link>
            <ul className="headList">
                <Link to="/cart" className="headLien">cart</Link>
            </ul>
        </nav>
    );
}

export default Head;
