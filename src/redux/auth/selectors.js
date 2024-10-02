import { createSelector } from "@reduxjs/toolkit";

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectUserName = (state) => state.auth.user.name;
export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    }
);