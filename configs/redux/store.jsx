import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducers";

const middleware = [thunk,logger];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

const makeStore = () => store

export const wrapper = createWrapper(makeStore)