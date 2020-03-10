import store from '../store';

export function chooseOption(value, option) {
    const state = store.getState().chooseIngredient;

    if(state.length > 0) {
        for (let index = 0; index < state.length; index++) {
            if (state[index].value === value) {
                return {
                    type: 'CHANGE_OPTION',
                    value, 
                    option,
                    index
                }
            }                  
        }
        return {
            type: 'ADD_OPTION',
            value, 
            option
        }
    } else {
        return {
            type: 'ADD_OPTION',
            value, 
            option
        }
    }
}

export function chooseIngredient(id_request, value, option) {
    const state = store.getState().chooseIngredient;

    if(state.length > 0) {
        for (let index = 0; index < state.length; index++) {
            if (state[index].value === value && state[index].id_ingredient === id_request) {
                return {
                    type: 'REMOVE_INGREDIENT',
                    id_request,
                    value,
                    option, 
                    index
                }
            }                  
        }
        return {
            type: 'CHOOSE_INGREDIENT',
            id_request,
            value,
            option
        }
    } else {
        return {
            type: 'CHOOSE_INGREDIENT',
            id_request,
            value,
            option
        }
    }
}

