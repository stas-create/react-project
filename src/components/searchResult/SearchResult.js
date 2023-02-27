import {Stars} from "../stars/Stars";
import {Link} from "react-router-dom";

import css from './SearchResult.module.css'

const SearchResult = ({movie}) => {

    const {original_title,poster_path,vote_average,id } = movie;

    const photoUrl='https://image.tmdb.org/t/p/w185/'

    return (

        <div className={css.card}>
            {poster_path && <img src={photoUrl + poster_path} alt=""/>}
            <div>Name: {original_title}</div>
            <div>Rate- {<Stars vote_average={vote_average}/> }</div>
            <Link to={id.toString()}> <button> Movie Details</button> </Link>
        </div>
    );
};

export {SearchResult};