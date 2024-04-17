import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Movie from './pages/movie/Movie';
import Header from './components/Header/Header';
export default function RouteApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}
