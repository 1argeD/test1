import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import user from "./user/userSlice"


//리듀서 통합
const rootTeducer = combineReducers({
    user,
});

//스토어 연결
const store = configureStore({
    reducer: rootTeducer,
    middleware: [thunk],
});

export default store;