export default function orderList(state = [], action) {
    switch (action.type) {
        case 'ADD_ORDER': 
        return [...state, {
            order: action.order
        }]

        case 'DELETE_ORDER': 
        for (let index = 0; index < state.length; index++) {
            if(state[index].order.name === action.order) {
                return [...state.filter(element => element.order.name !== action.order)]
            }
        }
        break
        
        default: return state;
    }
}