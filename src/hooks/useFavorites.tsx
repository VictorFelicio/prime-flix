import { useState, useEffect } from 'react';
import { MovieTypes } from '../interfaces/MoviesInterface';
import { localStorageKey } from '../constants/localStorageKey';

export function useFavorites() {
    const [favorites, setFavorites] = useState<MovieTypes[]>(() => {
        const localFavorites = localStorage.getItem(localStorageKey);
        return localFavorites ? JSON.parse(localFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(favorites));
    }, [favorites]);

    const updateFavorites = (newFavorites: MovieTypes[]) => {
        setFavorites(newFavorites);
    };

    return { favorites, updateFavorites };
}
