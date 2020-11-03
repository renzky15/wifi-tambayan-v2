import { v1 as uuid } from "uuid"

// ADD SALES ORDER
export const addItem = ({
    itemName = "",
    qty = 0,
    price = 0,
    createdAt = 0,
} = {}) => ({
    type: "ADD_ITEM",
    item: {
        id: uuid(),
        itemName,
        price,
        qty,
        createdAt,
    },
})
// REMOVE SALES ITEM
export const removeItem = ({ id } = {}) => ({
    type: "REMOVE_ITEM",
    id,
})

// // EDIT EXPENSE
// export const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates
// });
