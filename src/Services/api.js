import Burguer from '../Assets/icons/burguer.svg';
import Ponto from '../Assets/icons/ponto.svg';
import Pao from '../Assets/icons/pao.svg';
import Queijo from '../Assets/icons/queijo.svg';
import Ingredientes from '../Assets/icons/ingredientes.svg';

export const api = [
    { 
        id: 1,
        title: 'Hamburguer',
        img: {
            icon: Burguer,
            alt: 'Ícone de hamburguer',
        },
        requests: [
            {
                id_request: 1,
                value: 'burguer',
                option: 'Hamburguer 150g'
            },
            {
                id_request: 2,
                value: 'burguer',
                option: 'Hamburguer 300g'
            }
        ]
    },
    {
        id: 2,
        title: 'O ponto',
        img: {
            icon: Ponto,
            alt: 'Ícone do Ponto da carne',
        },
        requests: [
            {
                id_request: 1,
                value: 'hamburguer',
                option: 'Bem passado'
            },
            {
                id_request: 2,
                value: 'hamburguer',
                option: 'Ao ponto'
            },
            {
                id_request: 3,
                value: 'hamburguer',
                option: 'Mal passado'
            }
        ]
    }, 
    {
        id: 3,
        title: 'Pão',
        img: {
            icon: Pao,
            alt: 'Ícone de pão',
        },
        requests: [
            {
                id_request: 1,
                value: 'bread',
                option: 'Brioche'
            },
            {
                id_request: 2,
                value: 'bread',
                option: 'Australiano'
            }
        ]
    },
    {
        id: 4,
        title: 'Queijo',
        img: {
            icon: Queijo,
            alt: 'Ícone de queijo',
        },
        requests: [
            {
                id_request: 1,
                value: 'cheese',
                option: 'Mozarela'
            },
            {
                id_request: 2,
                value: 'cheese',
                option: 'Cheddar'
            },
            {
                id_request: 3,
                value: 'cheese',
                option: 'Sem queijo'
            }
        ]
    },
    {
        id: 5,
        title: 'Ingredientes',
        img: {
            icon: Ingredientes,
            alt: 'Ícone de ingredientes',
        },
        requests: [
            {
                id_request: 1,
                value: 'ingredients',
                option: 'Bacon'
            },
            {
                id_request: 2,
                value: 'ingredients',
                option: 'Cebola roxa'
            },
            {
                id_request: 3,
                value: 'ingredients',
                option: 'Pickles'
            },
            {
                id_request: 4,
                value: 'ingredients',
                option: 'Alface'
            },
            {
                id_request: 5,
                value: 'ingredients',
                option: 'Tomate'
            },
            {
                id_request: 6,
                value: 'ingredients',
                option: 'Cebola caramelizada'
            }
        ]
    }
]