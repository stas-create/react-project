import {Link} from "react-router-dom";
import {Stars} from "../stars/Stars";

import css from './Movie.module.css'

const Movie = ({movie}) => {

const {title,poster_path,id,vote_average } = movie;

const photoUrl='https://image.tmdb.org/t/p/w185/'

    return (

        <div className={css.card}>
            {poster_path && <img src={photoUrl + poster_path} alt=""/>}
            <div>{title}</div>
            <div> {<Stars vote_average={vote_average}/> }</div>
            <Link  to={id.toString()}><button>Movie details</button></Link>
        </div>
    );
};

export {Movie};