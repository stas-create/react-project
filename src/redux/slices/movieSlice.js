import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState={
    movies:[],
    errors:null,
    loading:null
};

const getAll=createAsyncThunk(
    'movieSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data} = await movieService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

let movieSlice = createSlice({
        name: 'moviesSlice',
        initialState,
        reducers:{},
        extraReducers:builder =>
            builder
                .addCase(getAll.fulfilled,(state, action) => {
                    state.movies=action.payload
                })
    },

);

let {reducer:moviesReducer} = movieSlice;

const movieAction={
    getAll
}

export {
    moviesReducer,
    movieAction
}

