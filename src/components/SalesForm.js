import React, { Component } from "react"

export class SalesForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: "",
            qty: 0,
            price: "",
            createdAt: 0,
            error: "",
        }
    }
    onDescriptionChange = (e) => {
        const itemName = e.target.value
        this.setState(() => ({ itemName }))
    }

    onPriceChange = (e) => {
        const price = e.target.value

        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }))
        }
    }
    onQtyChange = (e) => {
        const qty = e.target.value

        if (!qty || qty.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ qty }))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.itemName || !this.state.qty) {
            this.setState(() => ({
                error: "Please provide description and amount.",
            }))
        } else {
            this.setState(() => ({ error: "" }))
            console.log("Form submitted!")

            this.props.onSubmit({
                itemName: this.state.itemName,
                price: parseFloat(this.state.price),
                createdAt: 10,
                qty: this.state.qty,
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && (
                    <p style={{ color: "red" }}>{this.state.error}</p>
                )}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="item_name"
                        placeholder="Item Name"
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        name="qty"
                        placeholder="Qty"
                        onChange={this.onQtyChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={this.onPriceChange}
                    />

                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default SalesForm
