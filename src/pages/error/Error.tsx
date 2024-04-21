import { Link } from 'react-router-dom';
import { messages } from './messages';
import './error.css';

export function Error() {
    return (
        <div className="not-found">
            <h1>{messages[404]}</h1>
            <h2>{messages.not_found}</h2>
            <Link to={'/'}>{messages.see_all_movies}</Link>
        </div>
    );
}
