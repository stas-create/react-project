import {useSelector} from "react-redux";

import {Movies} from "../../components";

const FilmPage = () => {
    const {loading} = useSelector(state => state.movies);
    return (
        <div>
            {loading && <h2>Loading .....</h2>}
            <Movies/>
        </div>
    );
};

export {FilmPage};