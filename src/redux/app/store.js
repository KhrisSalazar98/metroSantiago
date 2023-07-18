import { configureStore } from "@reduxjs/toolkit";
import lineasReducer from '../features/linea/lineaSlice';

export const store = configureStore({
    reducer: {
        linea: lineasReducer,
    }
});