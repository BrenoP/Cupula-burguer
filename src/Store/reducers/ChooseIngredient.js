export default function chooseIngredient(state = [], action) {
    console.log(state)
    switch(action.type) {
        case 'CHOOSE_OPTION': 
        if(state.length > 0) {
            for (let index = 0; index < state.length; index++) {
                if (state[index].value === action.value) {
                //Edição de um objeto no state 
                   return [
                       ...state.slice(0, index), 
                        {...state[index], option: action.option},
                        ...state.slice(index + 1)
                    ]
                }                  
            }
            //Adição de um novo objeto caso não seja edição
            return [...state, { value: action.value,option: action.option }]
        } else {
            return [
                ...state, { 
                    value: action.value,
                    option: action.option 
                }
            ]
        }
            
        case 'CHOOSE_INGREDIENT': 
        if(state.length > 0) {
            for (let index = 0; index < state.length; index++) {
                if (state[index].value === action.value && state[index].id_ingredient === action.id_request) {
                //Deleta um objeto no state 
                   return [
                       ...state.slice(0, index), 
                    ]
                }                  
            }
            //Adição de um novo objeto caso não seja para deletar
            return [...state, { id_ingredient: action.id_request, value: action.value,option: action.option }]
        } else {
            return [
                ...state, {
                    id_ingredient: action.id_request, 
                    value: action.value,
                    option: action.option 
                }
            ]
        }

        default: return state;
    }
}