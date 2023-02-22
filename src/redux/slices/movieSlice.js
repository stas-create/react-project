import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

const initialState={
    movie:[],
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
        reducers:{}

    },
);

let {reducer:moviesReducer} = movieSlice;

export {
    moviesReducer
}

