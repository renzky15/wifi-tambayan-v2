import { v1 as uuid } from "uuid"

// ADD SALES ORDER
export const addSalesOrder = ({ items = [{}], total_amount = 0 } = {}) => ({
    type: "ADD_SALES_ORDER",
    sales_order_data: {
        id: uuid(),
        items,
        total_amount,
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
