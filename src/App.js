import {Route, Routes} from "react-router-dom";

import {FilmInfoPage, FilmPage, SearchPage} from "./pages";
import {MainLayout} from "./layout";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<FilmPage/>}/>
                    <Route path={'/:id'} element={<FilmInfoPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                    <Route path={'search/:id'} element={<FilmInfoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App };