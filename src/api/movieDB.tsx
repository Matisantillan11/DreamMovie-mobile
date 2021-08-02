import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '76ea301b5b0a49273c1693f3ec685b25',
    }
});

export default movieDB;