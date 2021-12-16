
import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: "app",
    initialState: {
        modal: false,
    },
    reducers: {
        openModal: (state, action) => {
            state.modal = action.payload.modal;
        },

    },
});


export const { openModal } = appSlice.actions;

export const getOpenModal = (state) => state.app.modal;


export default appSlice.reducer;