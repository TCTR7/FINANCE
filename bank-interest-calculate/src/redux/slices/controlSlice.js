import { createSlice } from '@reduxjs/toolkit';

export const controlSlice = createSlice({
    name: "control",
    initialState: {
        loanData: [],
        depositData: [],
        totalInterestPayable: 0,
        totalDepositInterest: 0,
        depositType: ""
    },
    reducers: {
        loadLoanData: (state, param) => {
            const newData = param.payload
            state.loanData = [...newData]
        },
        loadDepositData: (state, param) => {
            const newData = param.payload
            state.depositData = [...newData]
        },
        setTotalInterestPayable: (state, param) => {
            state.totalInterestPayable = param.payload
        },
        setTotalDepositInterest: (state, param) => {
            state.totalDepositInterest = param.payload
        },
        setDepositType: (state, param) => {
            state.depositType = param.payload
        },
    }
})

export const {
    loadLoanData,
    loadDepositData,
    setTotalInterestPayable,
    setTotalDepositInterest,
    setDepositType
} = controlSlice.actions;

export default controlSlice.reducer;
