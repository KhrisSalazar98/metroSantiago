import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../firebase/firebase-config";
import { collection, getDocs, query, where } from 'firebase/firestore';


//Read Lines
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


//Get Station
export const getStation = createAsyncThunk(
    "getStation",
    async (ids, {rejectWithValue}) => {
          
        const linesRef = collection(db, "redmetro");

        try{

            const q = query(linesRef, where("id_linea", "==", parseInt(ids.id_linea)));

            const querySnapshot = await getDocs(q);

            const lineaObtenida = querySnapshot.docs[0].data();
            const estaciones = lineaObtenida.estaciones;
            
            const estacionObtenida = estaciones.filter((estacion) => estacion.id_estacion === parseInt(ids.id_estacion))
            const classLinea = lineaObtenida.classLinea;
            const nombreLinea = lineaObtenida.nombreLinea;
            const nombreLinea2 = lineaObtenida.nombreLinea2;

            const result = {
                classLinea: classLinea,
                estacion: estacionObtenida[0],
                nombreLinea: nombreLinea,
                nombreLinea2: nombreLinea2
            }

            return result;

        }catch(error) {

            return rejectWithValue(error);
        }
    }
)

export const lineaSlice = createSlice({
    name: "linea",
    initialState: {
        dataLines: [],
        stationFound: null,
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

        //getStation extrareducers
        [getStation.pending] : (state) => {
            state.loading = true;
        },
        [getStation.fulfilled] : (state, action) => {
            state.loading= false;
            state.stationFound = action.payload;
        },
        [getStation.rejected] : (state) => {
            state.loading = false;
            state.error = state.payload; 
        },
    }
});

export default lineaSlice.reducer;