import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import SalesListItem from "./SalesListItem"
import { addSalesOrder } from "../../actions/sales_order"
import "./SalesList.css"

function SalesList(props) {
    const [total_amount, setTotal_amount] = useState(0)
    let tempAmount = []
    useEffect(() => {
        async function fetchData() {
            props.cart.map((sales) => tempAmount.push(sales.amount))

            // setMovies(request.data.results)

            return tempAmount
        }
        async function calculateTotal() {
            let sum = 0
            sum = tempAmount.reduce((accumulator, currentValue) => {
                return accumulator + currentValue
            }, 0)

            setTotal_amount(sum)
        }
        fetchData()
        calculateTotal()
        console.log(total_amount)
    })

    const handlePlaceOrder = () => {
        // props.dispatch(addSalesOrder(props.cart))
    }

    return (
        <div>
            <div className="list_header">
                <span id="header_text">SUMMARY</span>
            </div>

            <div className="list_container">
                <div className="list_title">
                    <div>ITEM NAME</div>
                    <div>QTY</div>
                    <div>PRICE</div>
                    <div>AMOUNT</div>
                    <div>ACTION</div>
                </div>
                {props.cart.map((SalesItem) => {
                    return <SalesListItem key={SalesItem.id} {...SalesItem} />
                })}
            </div>

            <div className="list_footer">
                <div className="total_btn_container">
                    <button className="total_btn">
                        <span style={{ fontSize: "20px" }}>TOTAL</span>
                        <span style={{ fontSize: "24px", fontWeight: "800" }}>
                            Php {total_amount}.00
                        </span>
                    </button>
                </div>

                <div className="checkout_btn_container">
                    <button onClick={handlePlaceOrder} className="checkout_btn">
                        <span
                            style={{
                                fontSize: "24px",
                                fontWeight: "800",
                            }}
                        >
                            PLACE ORDER
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps)(SalesList)
