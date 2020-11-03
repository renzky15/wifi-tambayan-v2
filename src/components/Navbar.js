import React from "react"
import app from "../util/firebase"

function Navbar() {
    return (
        <div className="nav_container">
            <div className="nav_content">
                <h3 id="nav_name_logo">Wifi Tambayan</h3>
                <button
                    className="btn_logout"
                    onClick={() => app.auth().signOut()}
                >
                    Log out
                </button>
            </div>
        </div>
    )
}

export default Navbar
