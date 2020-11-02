import React from "react"
// import ExpenseForm from "./SalesForm"
import { connect } from "react-redux"
import SalesList from "./SalesList/SalesList"
import Item from "./Item/Item"
import Navbar from "./Navbar"

const SalesPage = (props) => (
    <div>
        <Navbar />
        <div className="sales_container">
            <div className="product_item">
                {props.items.map((item, index) => (
                    <Item key={index} itemName={item.itemName} payload={item} />
                ))}
            </div>

            <div className="sales_list">
                <SalesList />
            </div>
        </div>
    </div>
)
const mapStateToProps = (state) => {
    return {
        items: state.items,
        cart: state.cart,
    }
}
export default connect(mapStateToProps)(SalesPage)
