import { v1 as uuid } from "uuid"

// ADD SALES ORDER
export const addSales = ({
    itemName = "",
    qty = 0,
    price = 0,
    amount = 0,
    createdAt = 0,
} = {}) => ({
    type: "ADD_SALES",
    salesOrder: {
        id: uuid(),
        itemName,
        qty,
        price,
        amount,
        createdAt,
    },
})
// REMOVE SALES ITEM
export const removeSalesItem = ({ id } = {}) => ({
    type: "REMOVE_SALES_ITEM",
    id,
})

// EDIT EXPENSE
export const editSalesItem = (id, updates) => ({
    type: "EDIT_SALES_ITEM",
    id,
    updates,
})
