import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faArrowRightRotate,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";

import {movieAction} from "../../redux";
import css from './Movies.module.css'
import {Movie} from "../movie/Movie";


const Movies = () => {

    const {handleSubmit} = useForm();

    const {movies, prev, next, genres, genreSearch, totalPages, loading} = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [selectedGenres, setSelectedGenres] = useState([]);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (genreSearch) {
            dispatch(movieAction.searchByGenre({genreSearch, page: query.get('page')}))
        } else {
            dispatch(movieAction.getAll({page: query.get('page')}))
        }
    }, [dispatch, query, genreSearch]);

    useEffect(() => {
        dispatch(movieAction.getAllGenre())
    }, [dispatch])

    const checkboxChange = (e) => {
        const genreId = parseInt(e.target.value);
        if (e.target.checked) {
            setSelectedGenres([...selectedGenres, genreId]);
        } else {
            setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
        }
    }

    function submit() {
        dispatch(movieAction.setGenres(selectedGenres))
        setQuery(query => ({page: '1'}))
    }

    function resetSearch() {
        dispatch((movieAction.reset(null)));
        setQuery(query => ({page: '1'}));
        setSelectedGenres([])
    }

    return (

        <div className={css.flex}>

            {loading && <h1>Loading .........</h1>}

            {(!loading && movies.length === 0) && <h1>There are no movies with these genres! Choose another genres.
            </h1>}

            <div>
                <div>
                    <div className={css.moviesList}>
                        {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                    </div>
                </div>

                <div className={css.pageButton}>

                    <button hidden={(!loading && movies.length === 0)} disabled={!prev}
                            onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}><FontAwesomeIcon
                        icon={faArrowLeft} size={'2x'}/></button>

                    <button hidden={(!loading && movies.length === 0)} disabled={!next || next - 1 === totalPages}
                            onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>{
                        <FontAwesomeIcon size={'2x'} icon={faArrowRight}/>}</button>
                </div>
            </div>

            <div className={css.form}>
                <form onSubmit={handleSubmit(submit)}>
                    {genres.map(genre => (
                        <div key={genre.id}>
                            <input type="checkbox"
                                   value={genre.id}
                                   checked={selectedGenres.includes(genre.id)}
                                   onChange={checkboxChange}/>
                            <label>{genre.name}</label>

                        </div>
                    ))}

                    <button>{<FontAwesomeIcon icon={faSearch}/>}</button>
                    <button disabled={!genreSearch} onClick={handleSubmit(resetSearch)}>{<FontAwesomeIcon
                        icon={faArrowRightRotate}/>}</button>
                </form>
            </div>
        </div>
    );
};

export {Movies};