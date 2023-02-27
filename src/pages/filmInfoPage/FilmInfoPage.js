import { useParams} from "react-router-dom";

import {FilmInfo} from "../../components";

const FilmInfoPage = () => {
    const {id} = useParams();

    return (
        <div>
           <FilmInfo  id={id}/>
        </div>
    );
};

export {FilmInfoPage};