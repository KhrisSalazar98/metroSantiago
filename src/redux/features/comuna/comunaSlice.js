import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase/firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore';

//read comunas
export const readComunas = createAsyncThunk(
    "readComunas",
    async (args, {rejectWithValue}) => {

        const comunasCollectionRef = collection(db, "sectores");

        try {
            const result = await getDocs(comunasCollectionRef);
            const listComunas = result.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            return listComunas[0];

        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const comunaSlice = createSlice({
    name: "comuna",
    initialState: {
        dataComunas: [],
        comunaFound: null,
        loading: false,
        error: null
    },

    extraReducers: {

        //read comunas extrareducers
        [readComunas.pending] : (state) => {
            state.loading = true;
        },
        [readComunas.fulfilled] : (state, action) => {
            state.loading= false;
            state.dataComunas = action.payload;
        },
        [readComunas.rejected] : (state) => {
            state.loading = false;
            state.error = state.payload; 
        },
    }
});

export default comunaSlice.reducer;