import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const rootReducer = {
    contacts: contactsReducer,
    filter: filterReducer,
};

import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import filtersReducer from './filters/filtersSlice';
import authReducer from './auth/authSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
  auth: authReducer,
});

export default rootReducer;
