import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase/firebase-config";
import { collection, getDocs } from 'firebase/firestore';


export const readLines = createAsyncThunk(
    "readLines",
    async (args, {rejectWithValue}) => {
        
        const linesCollectionRef = collection(db, "redmetro");
        
        try {

            const result = await getDocs(linesCollectionRef);
            const lines = await result.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            lines.sort((a, b) => a.id_linea - b.id_linea);
            
            return lines;

        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const lineaSlice = createSlice({
    name: "linea",
    initialState: {
        dataLines: [],
        loading: false,
        error: null
    },

    extraReducers : {

        //read lines extrareducers
        [readLines.pending] : (state) => {
            state.loading = true;
        },
        [readLines.fulfilled] : (state, action) => {
            state.loading= false;
            state.dataLines = action.payload;
        },
        [readLines.rejected] : (state) => {
            state.loading = false;
            state.error = state.payload; 
        },
    }
});

export default lineaSlice.reducer;