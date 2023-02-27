const baseURL = 'https://api.themoviedb.org/3';

const urls={
    movie:{
        movies:'discover/movie',
        movie:'/movie',
        search:'/search/movie',
        genre:'/genre/movie/list',
        // searchByGenre:'/discover/movie?&with_genres=28,18'
    }
}

export {
    baseURL,
    urls
}