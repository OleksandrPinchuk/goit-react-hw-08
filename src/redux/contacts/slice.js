import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
            })
            .addCase(logOut.fulfilled, () => {
                return initialState;
            })
            .addMatcher(isAnyOf(deleteContact.pending, addContact.pending, fetchContacts.pending,), state => {
                state.isLoading = true;
                state.error = null;
            })
            .addMatcher(isAnyOf(deleteContact.rejected, addContact.rejected, fetchContacts.rejected,), (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default contactsSlice.reducer;