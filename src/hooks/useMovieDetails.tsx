import { useEffect, useState } from "react"
import { MovieDB } from "../api/movieDB";
import { Cast, CastElement } from "../interfaces/castInterface";
import { FullMovie } from "../interfaces/movieInterface";

interface MovieDetails {
    cast: CastElement[],
    fullMovie?: FullMovie,
}
export const useMovieDetails = (movieId: number) => {

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        cast: [],
        fullMovie: undefined
    });
    const [isLoading, setIsLoading] = useState(true);
    
    const getMovieDetails = async () =>{
        const movieCastPromise = MovieDB.get<Cast>(`/${movieId}/credits`)
        const movieDetailsPromise = MovieDB.get<FullMovie>(`/${movieId}`)
        

        const response = await Promise.all([
            movieCastPromise,
            movieDetailsPromise,
        ])
        

        setMovieDetails({
            cast: response[0].data.cast,
            fullMovie: response[1].data
        })

        setIsLoading(false);
        
        
    }
    
    useEffect(() => {
        getMovieDetails();
    }, [])
    
    
    return { movieDetails, isLoading }
}
