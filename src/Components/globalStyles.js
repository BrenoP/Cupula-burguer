import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    margin-top: 2rem;
`

export const Button = styled.button`
    padding: 1rem;
    background-color: #20a7ea;
    border-radius: 5px;
    border: 0;
    width: fit-content;
    height: fit-content;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    font-variant: petite-caps;
    cursor: pointer;
    transition: background-color 0.3s;
        &:hover {
            background-color: #13688c;
        }
`

export const Input = styled.input`
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 1.2rem 1.8rem 1.2rem 1.8rem;
    margin-right: 1.2rem;
`