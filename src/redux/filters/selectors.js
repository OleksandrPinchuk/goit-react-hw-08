import { createSelector } from "@reduxjs/toolkit";
export const selectNameFilter = (state) => state.filter.name;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter], (contacts, contactFilter) => {
        return contacts?.filter((contact) =>
            contact.name.toLowerCase().includes(contactFilter.toLowerCase()))
    }
);