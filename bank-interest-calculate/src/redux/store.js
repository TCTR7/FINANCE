import controlSlice from "./slices/controlSlice"
import headerSlice from "./slices/headerSlice"
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        control: controlSlice,
        header: headerSlice
    }
});