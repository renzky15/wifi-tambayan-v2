import { createStore, combineReducers } from "redux"
import salesReducer from "../reducers/index"
import itemReducer from "../reducers/itemReducer"
import salesOrderReducer from "../reducers/sales_order"

export default () => {
    const store = createStore(
        combineReducers({
            cart: salesReducer,
            items: itemReducer,
            sales_order: salesOrderReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
