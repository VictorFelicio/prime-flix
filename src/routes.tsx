import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}
