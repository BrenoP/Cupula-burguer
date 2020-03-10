export default function chooseIngredient(state = [], action) {
    console.log(state)
    switch(action.type) {
        case 'ADD_OPTION':  
        return [
            ...state, { 
                value: action.value,
                option: action.option 
            }
        ]

        case 'CHANGE_OPTION':
        return [
            ...state.slice(0, action.index), 
            {...state[action.index], option: action.option},
            ...state.slice(action.index + 1)
        ]

        case 'CHOOSE_INGREDIENT':
        return [
            ...state, {
                id_ingredient: action.id_request, 
                value: action.value,
                option: action.option 
            }
        ]

        case 'REMOVE_INGREDIENT':
        return [
            ...state.slice(0, action.index), 
        ]

        default: return state;
    }
}