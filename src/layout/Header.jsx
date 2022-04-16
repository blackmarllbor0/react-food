import { NavLink, Link } from "react-router-dom";

export const Header = () => {
    const active = 'deep-purple darken-2';
    return (
        <nav className="deep-purple darken-3">
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">React Food</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to='/'
                            className={({ isActive}) => isActive ? active : null}> Main </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'
                            className={({ isActive}) => isActive ? active : null}> About </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' 
                            className={({ isActive}) => isActive ? active : null}> Contact </NavLink>
                    </li>
                </ul>
            </div>
      </nav>
    );
};