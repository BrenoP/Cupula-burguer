import React, { Component } from 'react';
import { Cards } from '../Cards/Card';
import { api } from '../../Services/api';
import '../../Assets/css/style.css';
import { Container } from './Order.styles';
import { Title, Button, Input } from '../../Components/globalStyles';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../Store/actions/addOrder';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Order extends Component {

    state = {
        itemText: ''
    }

    warningToast = (text) => {
        return toast.warning(text, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    verification = (name, order) => {
        if(!order.find(element => element.value === "burguer")) {
            this.warningToast("Insira sua opção de Hamburguer")
            return false
        } else if (!order.find(element => element.value === "hamburguer")) {
            this.warningToast("Insira sua opção de ponto da carne")
            return false
        } else if (!order.find(element => element.value === "bread")) {
            this.warningToast("Insira sua opção de pão")
            return false
        } else if (!order.find(element => element.value === "cheese")){
            this.warningToast("Insira sua opção de queijo")
            return false
        } else if (name === ''){
            this.warningToast("Insira o nome no pedido")
            return false
        } else {
            return true
        }
    }

    addOrder = () => {
        if(this.verification(this.state.itemText, this.props.chooseIngredient)) {
            this.props.addOrder({ name: this.state.itemText, order: this.props.chooseIngredient });
            this.setState({ itemText: '' })
            toast.info("O pedido foi realizado com sucesso", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    render() {
        return(
            <>
                <Title>Faça seu Pedido</Title>
                <ToastContainer enableMultiContainer position={toast.POSITION.TOP_RIGHT} autoClose={2000} />
                <div className="grid-cards">
                    {api.map(element => {
                        return (
                            <Cards title={element.title} order={element} /> 
                        )
                    })}
                    <div>
                        <p className="message-done">Para finalizar o pedido clique no botão</p>
                        <Container>
                            <Input placeholder="Nome no pedido" value={this.state.itemText} onChange={(event) => this.setState({ itemText: event.target.value})} />
                            <Button onClick={this.addOrder}>Fazer pedido</Button>
                        </Container>
                    </div>
                </div>
            </>
        ); 
    }
}

const mapStateToProps = state => ({
    chooseIngredient: state.chooseIngredient,
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(orderActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Order);
