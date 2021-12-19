import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import roortRducer from "./reducers/rootReducer";

const store = createStore(roortRducer, composeWithDevTools());

export default store;
