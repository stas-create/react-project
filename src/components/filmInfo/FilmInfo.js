import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieAction} from "../../redux";
import css from './FilmInfo.module.css'
import {Genre} from "../genre/Genre";

const FilmInfo = ({id}) => {
    const {selectedFilm} = useSelector(state => state.movies);

    const photoUrl = 'https://image.tmdb.org/t/p/w342/'

    const photoUrl2 = 'https://image.tmdb.org/t/p/w500/'

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getById({id}))
    },[dispatch,id])

    return (
        <div className={css.flex}>

            <div className={css.badgesContainer}>

                {selectedFilm.poster_path && <img src={photoUrl + selectedFilm.poster_path} alt="photo"/>}

                <div className={css.Badges}>
                    {selectedFilm.genres && selectedFilm.genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
                </div>
            </div>

            <div className={css.aboutFilm}>

                <div>{selectedFilm.overview}</div>

                <div className={css.filmInfo}>
                    <div> Name - {selectedFilm.original_title}</div>
                    <div>Release date - {selectedFilm.release_date}</div>
                    <div>Status - {selectedFilm.status}</div>
                    <div>Budget - {selectedFilm.budget}$</div>
                    <div>Runtime - {selectedFilm.runtime}</div>
                    <div>Rate - {selectedFilm.vote_average}</div>
                </div>

                <div className={css.poster}>
                    {selectedFilm.backdrop_path && <img src={photoUrl2 + selectedFilm.backdrop_path} alt=""/>}
                </div>
            </div>
        </div>

    );
};

export {FilmInfo};