import storage from "reduxjs-toolkit-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
import { rootReducer } from "./slices";
/*

  This will be the persisted Reducer, it will detect change in state
  and persists it again
*/
const _persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

// Defining Store Now
const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// Finally defining and exporting persistor
export const persistor = persistStore(store);
// exporting store
export default store;
