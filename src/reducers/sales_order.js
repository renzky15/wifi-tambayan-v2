const salesOrderReducerDefaultState = []

export default (state = salesOrderReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_SALES_ORDER":
            return [...state, action.sales_order_payload]
        case "REMOVE_SALES_ITEM":
            return state.filter(({ id }) => id !== action.id)

        case "EDIT_SALES_ITEM":
            return state.map((salesOrder) => {
                if (salesOrder.id === action.id) {
                    return {
                        ...salesOrder,
                        ...action.updates,
                    }
                } else {
                    return salesOrder
                }
            })
        default:
            return state
    }
}
