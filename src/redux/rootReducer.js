import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";

export const rootReducer = {
    contacts: contactsReducer,
    filter: filterReducer,
};

// import { combineReducers } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/slice';
// import filtersReducer from './filters/slice';
// import authReducer from './auth/slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
//   auth: authReducer,
// });

// export default rootReducer;
