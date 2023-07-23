import { configureStore } from "@reduxjs/toolkit";
import lineasReducer from '../features/linea/lineaSlice';
import comunasReducer from '../features/comuna/comunaSlice';

export const store = configureStore({
    reducer: {
        linea: lineasReducer,
        comuna: comunasReducer,
    }
});