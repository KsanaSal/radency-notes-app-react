import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceNotes from "./notes/sliceNotes";

const rootReducer = combineReducers({
    notes: sliceNotes,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type appDispatch = typeof store.dispatch;

export default store;
