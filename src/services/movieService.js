import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService={
    getAll:(page=1)=>apiService.get(urls.movie.movies, {params:{page}}),
    getById:(id)=>apiService.get(`${urls.movie.movie}/${id}`),
    search:(keyWord,page=1)=>apiService.get(`${urls.movie.search}?&query=${keyWord}&page=${page}`),
    getAllGenre:()=>apiService.get(urls.movie.genre),
    searchByGenre:(genreSearch,page=1)=>apiService.get(`${urls.movie.movies}?&with_genres=${genreSearch}&page=${page}`)
}

export {
    movieService
}
