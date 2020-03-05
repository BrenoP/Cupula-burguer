export function addOrder(order) {
    return {
        type: 'ADD_ORDER',
        order
    }
}

export function deleteOrder(order) {
    return {
        type: 'DELETE_ORDER',
        order
    }
}