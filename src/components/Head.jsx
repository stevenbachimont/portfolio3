import { Link } from 'react-router-dom';
import "/src/components/Head.css";

function Head() {
    return (
        <nav>
            <Link to="/" className="headTitle">shopfolio</Link>
            <ul className="headList">
                <Link to="/page1" className="headLien">login</Link>
                <Link to="/page2" className="headLien">register</Link>
                <Link to="/cart" className="headLien">cart</Link>
            </ul>
        </nav>
    );
}

export default Head;
