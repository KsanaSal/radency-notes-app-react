import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import sliceUser from "./auth/sliceUser";
// import sliceTrips from "./trips/sliceTrips";
// import sliceBooking from "./booking/sliceBooking";
// import sliceFilteredTrips from "./search/sliceSearch";

const rootReducer = combineReducers({
    // user: sliceUser,
    // trips: sliceTrips,
    // booking: sliceBooking,
    // filteredList: sliceFilteredTrips,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

export type appDispatch = typeof store.dispatch;

export default store;
