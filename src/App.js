import React from "react"
import "./App.css"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import configureStore from "./store/configStore"
// import { addSales } from "./actions/sales"
import SalesPage from "./components/SalesPage"
import { addItem } from "./actions/items"
import Login from "./components/Login/Login"
import { AuthProvider } from "./util/Auth"
import SignUp from "./components/SignUpPage/SignUp"
import PrivateRoute from "./util/PrivateRoute"

const store = configureStore()

store.dispatch(
    addItem({
        itemName: "3hrs",
        price: 30,
        createdAt: 2000,
    })
)
store.dispatch(
    addItem({
        itemName: "2hrs",
        price: 20,
        createdAt: 2000,
    })
)
store.dispatch(
    addItem({
        itemName: "5hrs",
        price: 50,
        createdAt: 2000,
    })
)
function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Router>
                    <div className="App">
                        <Switch>
                            <PrivateRoute
                                exact
                                path="/"
                                component={SalesPage}
                            />
                            <Route exact path="/sign-up" component={SignUp} />
                            <Route exact path="/login" component={Login} />
                        </Switch>
                    </div>
                </Router>
            </AuthProvider>
        </Provider>
    )
}

export default App
