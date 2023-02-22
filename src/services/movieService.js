import {apiService} from "./apiService";
import {urls} from "../configs";

const movieService={
    getAll:()=>apiService.get(urls.movie.movies)
}

export {
    movieService
}
