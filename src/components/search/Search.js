import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {faArrowLeft, faArrowRight, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {SearchResult} from "../searchResult/SearchResult";
import css from './Search.module.css'
import {movieAction} from "../../redux";

const Search = () => {

    const {moviesSearch, prev, next, totalPages} = useSelector(state => state.movies);

    const [keyWord, setKeyWord] = useState(null);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        if (keyWord) {
            dispatch(movieAction.search({page: query.get('page'), keyWord}))
        }
    }, [query, dispatch, keyWord])

    const ref = useRef();

    const submit = () => {
        setKeyWord(ref.current.value)
        setQuery(query => ({page: '1'}))
    };

    return (
        <div>
            <div className={css.search}>

                <div>
                    <input type={'text'} ref={ref}/>
                    <button onClick={() => submit()}>{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</button>
                </div>

            </div>

            <div>

                <div className={css.moviesList}>
                    {moviesSearch && moviesSearch.map(movie => <SearchResult key={movie.id} movie={movie}/>)}
                </div>

                <div className={css.pageButton}>
                    <button hidden={!totalPages || moviesSearch.length === 0} disabled={!prev}
                            onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>{<FontAwesomeIcon
                        icon={faArrowLeft} size={'2x'}/>}</button>
                    <button hidden={!totalPages || moviesSearch.length === 0}
                            disabled={!next || next - 1 === totalPages}
                            onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>{
                        <FontAwesomeIcon size={'2x'} icon={faArrowRight}/>}</button>
                </div>
            </div>
        </div>
    );
};

export {Search};