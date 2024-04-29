import { Link } from 'react-router-dom';

import './header.css';
import { messages } from './messages';

export function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                {messages.logo}
            </Link>
            <Link to="/favorites" className="favorites">
                {messages.favorite}
            </Link>
        </header>
    );
}
