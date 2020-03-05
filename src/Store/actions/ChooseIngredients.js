export function chooseOption(value, option) {
    return {
        type: 'CHOOSE_OPTION',
        value, 
        option
    }
}

export function chooseIngredient(id_request, value, option) {
    return {
        type: 'CHOOSE_INGREDIENT',
        id_request,
        value,
        option
    }
}

