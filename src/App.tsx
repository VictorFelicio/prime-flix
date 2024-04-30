import { ToastContainer } from 'react-toastify';
import { RouteApp } from './routes';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <div>
            <ToastContainer autoClose={3500} />
            <RouteApp />
        </div>
    );
}
