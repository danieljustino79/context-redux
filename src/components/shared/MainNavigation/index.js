import { NavLink } from 'react-router-dom';

import './styles.css';

function MainNavigation(props){
    return (
        <header className="main-navigation">
            <nav>
            <ul>
                <li>
                <NavLink to="/">Products</NavLink>
                </li>
                <li>
                <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;