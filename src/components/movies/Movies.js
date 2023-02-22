import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieAction} from "../../redux";
import {Movie} from "../movie/Movie";

const Movies = () => {

    const {results} = useSelector(state => state.movies);

    // const {results}=movies
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieAction.getAll())
    }, [dispatch]);

    // console.log(movies);
    return (
        <div>
            {results && results.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};