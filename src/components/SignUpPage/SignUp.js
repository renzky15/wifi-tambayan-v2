import React, { useCallback } from "react"
import { withRouter } from "react-router"
import app from "../../util/firebase"
import "./SignUp.css"

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault()
            const { email, password } = event.target.elements

            try {
                await app
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value)
                history.push("/")
            } catch (error) {
                alert(error.message)
            }
        },
        [history]
    )

    return (
        <div className="create_container">
            <h2
                style={{
                    textAlign: "center",
                    margin: 0,
                    marginTop: "30px",
                }}
            >
                Create Account
            </h2>
            <p style={{ textAlign: "center", margin: 0 }}>
                Sign Up to continue
            </p>
            <form className="create_form" onSubmit={handleSignUp}>
                <input type="email" name="email" placeholder="Email" required />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />

                <button className="btn_create">Continue</button>
            </form>
        </div>
    )
}

export default withRouter(SignUp)
