import { createStore, applyMiddleware } from "redux";
import Reducer from "../reducers/reducer";

import thunk from "redux-thunk";

export default createStore(Reducer, applyMiddleware(thunk));
