import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from './pages/home/Home';
import {Movie} from './pages/movie/Movie';
import {Header} from './components/Header/Header';
import {Error} from './pages/error/Error';

export function RouteApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}
