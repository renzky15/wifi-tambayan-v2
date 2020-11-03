import React, { useCallback, useContext, useState } from "react"
import { withRouter, Redirect } from "react-router"
import app from "../../util/firebase"
import { AuthContext } from "../../util/Auth"
import "./Login.css"

const Login = ({ history }) => {
    const [loader, setLoader] = useState(false)

    const handleLogin = useCallback(
        async (e) => {
            e.preventDefault()
            const { email, password } = e.target.elements
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                alert("User not found")
            }
        },
        [history]
    )

    const { currentUser } = useContext(AuthContext)

    if (currentUser) {
        return <Redirect className="loader" to="/" />
    }

    return loader ? (
        <div className="loader"></div>
    ) : (
        <div className="login_container">
            <h2
                style={{
                    textAlign: "center",
                    margin: 0,
                    marginTop: "30px",
                }}
            >
                Member Login
            </h2>
            <p style={{ textAlign: "center", margin: 0 }}>
                Sign in to continue
            </p>
            <form className="login_form" onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" required />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <button className="btn_login">LOGIN</button>
            </form>
            <p id="register_link">
                Not yet register? <a href="/sign-up">Register here</a>
            </p>
        </div>
    )
}

export default withRouter(Login)
