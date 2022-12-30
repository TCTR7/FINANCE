import { createSlice } from '@reduxjs/toolkit';
import Constants from '../../helpers/constants';

export const headerSlice = createSlice({
    name: "control",
    initialState: {
        calculatingType: Constants.CALCULATING_LOAN_INTEREST
    },
    reducers: {
        setCalculatingType: (state, param) => {
            state.calculatingType = param.payload
        }
    }
})

export const { setCalculatingType } = headerSlice.actions;

export default headerSlice.reducer;