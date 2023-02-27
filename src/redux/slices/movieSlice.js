import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState={
    movies:[],
    loading:null,
    prev:null,
    next:null,
    totalPages:null,
    selectedFilm: {},
    moviesSearch:[], //фільми з пошуку
    genres:[], //всі жанри
    genreSearch:null, // жанри які використовуються в пошуку

};

const getAll=createAsyncThunk(
    'movieSlice/getAll',
    async ({page},thunkAPI)=>{
        try {
            const {data} = await movieService.getAll(page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id},thunkAPI)=>{
        try {
            const {data} = await movieService.getById(id);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }

    }
);

const search = createAsyncThunk(
    'moviesSlice/search',
    async ({keyWord,page},thunkAPI)=>{
        try {
            const {data} = await movieService.search(keyWord,page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getAllGenre = createAsyncThunk(
    'moviesSlice/genre',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAllGenre();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const searchByGenre = createAsyncThunk(
    'movieSlice/searchByGenre',
    async ({genreSearch,page},thunkAPI)=>{
        try {
            const {data} = await movieService.searchByGenre(genreSearch,page);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

let movieSlice = createSlice({
        name: 'moviesSlice',
        initialState,
        reducers:{
            setGenres:(state, action)=>{
                state.genreSearch=action.payload
            },
            reset:(state, action)=>{
                state.genreSearch=action.payload

            },
            clickOnSearch:(state, )=>{
                state.prev=null
                state.next=null
                state.totalPages=null
                state.moviesSearch=null
            },

        },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.movies = results
                state.prev = page - 1
                state.next = page + 1
                state.totalPages = total_pages
                state.loading = false
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedFilm = action.payload;
            })
            .addCase(search.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.moviesSearch = results
                state.prev = page - 1
                state.next = page + 1
                state.totalPages = total_pages
            })

            .addCase(getAllGenre.fulfilled, (state, action) => {
                const {genres} = action.payload
                state.genres = genres

            })
            .addCase(searchByGenre.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload;
                state.movies = results
                state.prev = page - 1
                state.next = page + 1
                state.totalPages = total_pages
                state.loading = false

            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').slice(-1);
                state.loading = actionStatus === 'pending';
            })
    },

);

let {reducer:moviesReducer,actions:{setGenres,reset,clickOnSearch,backToMovies}} = movieSlice;

const movieAction={
    getAll,
    getById,
    search,
    getAllGenre,
    searchByGenre,
    setGenres,
    reset,
    clickOnSearch,
    backToMovies
}

export {
    moviesReducer,
    movieAction

}

