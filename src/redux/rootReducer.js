import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const rootReducer = {
    contacts: contactsReducer,
    filter: filterReducer,
};