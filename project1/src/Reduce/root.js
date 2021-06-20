import { combineReducers } from "redux";
import booksCollection from "./reducerBooks/index";

const rootReducer = combineReducers({
    booksCollection: booksCollection
})

export default rootReducer;