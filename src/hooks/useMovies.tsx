import React, { useEffect, useState } from 'react'
import {MovieDB} from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const getMovies = async () =>{
        const response = await MovieDB.get<MovieDBNowPlaying>('/now_playing');

        const movies =  response.data.results;
        
        setNowPlaying(movies);
        setIsLoading(false);
        
    }

    useEffect(() => {
        getMovies();           
    }, []);

    return { nowPlaying, isLoading }
}
