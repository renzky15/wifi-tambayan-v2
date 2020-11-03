import React from "react"
import { connect } from "react-redux"
import { addSales } from "../../actions/sales"
import "./Item.css"
function Item(props) {
    const handleAddSales = () => {
        props.dispatch(addSales(props.payload))
    }
    return (
        <div className="item_container">
            <button className="item_btn" onClick={() => handleAddSales()}>
                {props.itemName}
            </button>
        </div>
    )
}

export default connect()(Item)
