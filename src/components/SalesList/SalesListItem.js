import { connect } from "react-redux"
import { removeSalesItem, editSalesItem } from "../../actions/sales"
import "./SalesList.css"

import React, { Component } from "react"

export class SalesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            itemName: props.itemName,
            qty: props.qty ? props.qty : 0,
            price: props.price,
            amount: props.price * props.qty,
            error: "",
        }
    }

    handleRemove = (id) => {
        this.props.dispatch(removeSalesItem({ id }))
    }
    onChangeQty = (e, id) => {
        const qty = e.target.value
        let amount = this.state.amount

        if (!qty || qty.match(/^\d{1,}(\.\d{0,2})?$/)) {
            amount = this.state.price * qty
            this.setState(() => ({ qty, amount }))
            setTimeout(
                () =>
                    this.props.dispatch(
                        editSalesItem(id, {
                            qty: this.state.qty,
                            amount: this.state.amount,
                        })
                    ),
                100
            )
        }
    }

    render() {
        return (
            <div className="order">
                <div className="order_item">
                    <div className="order_item_value">
                        {this.state.itemName}
                    </div>
                    <div className="order_item_value">
                        <input
                            type="number"
                            onChange={(e) => this.onChangeQty(e, this.state.id)}
                            value={this.state.qty}
                        />
                    </div>
                    <div className="order_item_value">
                        {this.state.price}.00
                    </div>
                    <div className="order_item_value">
                        {this.state.amount}.00
                    </div>
                    <button
                        className="remove_btn"
                        onClick={() => this.handleRemove(this.state.id)}
                    >
                        X
                    </button>
                </div>
            </div>
        )
    }
}

export default connect()(SalesListItem)
