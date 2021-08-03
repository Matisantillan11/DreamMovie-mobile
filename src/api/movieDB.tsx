import axios from 'axios';

export const MovieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '76ea301b5b0a49273c1693f3ec685b25',
    }
});
