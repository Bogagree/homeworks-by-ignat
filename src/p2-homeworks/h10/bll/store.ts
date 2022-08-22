import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";
import {colorReducer} from "./color-reducer";

const reducers = combineReducers({
    loading: loadingReducer,
    color: colorReducer
})

const store = legacy_createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
