import styled from 'styled-components';

export const Notes = styled.div`
    display: ${props => (props.displayed.length < 1) ? 'none' : 'inline-block' };
    padding: 1.5rem 1.2rem 2rem 1.2rem;
    margin: 1.5rem;
    border: 1px solid #adadad;
    box-shadow: 6px 6px 8px #888888;
    border-radius: 1rem;
    height: 100%;
    width: 20%;
    background-color: #fce29c;
    vertical-align: top;
`

export const ItemList = styled.li`
    display: block;
    color: black;
    border-bottom: 1px solid black;
    width: 100%;
    padding: 0.5rem 1rem;

    strong {
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
`

export const Observation = styled.p`
    text-align: center;
    margin: 3rem 0rem;
    font-style: italic;
`

export const Delete = styled.span`
    float: right;
    font-family: cursive;
    font-weight: 700;
    margin-top: -5%;
    cursor: pointer;
`

export const AlignButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5rem 0rem 0rem 0rem;
`

export const FormSend = styled.form`
    padding: 0rem 1rem 1rem 1rem;
    display: flex;
    justify-content: center;
`