import { Link } from 'react-router-dom';

import './header.css';
import { messages } from './messages';

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                {messages.logo}
            </Link>
            <Link to="/" className="favorites">
                {messages.favorite}
            </Link>
        </header>
    );
}
