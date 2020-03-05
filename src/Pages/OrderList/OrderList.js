import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../../Store/actions/addOrder';
import { Notes, ItemList, Observation, Delete, AlignButton, FormSend } from './OrderList.styles';
import { Title, Button, Input } from '../../Components/globalStyles';
// import { Modal } from 'react-rainbow-components';

class OrderList extends Component {

    constructor(props) {
        super(props)
        this.state = { listOrder: [], isOpen: false }
    }

    handleOnClick = () => {
        return this.setState({ isOpen: true });
    }

    handleOnClose = () => {
        return this.setState({ isOpen: false });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ listOrder: nextProps.orderList })
    }

    deleteOption = () => {
        debugger
        console.log(this.state)
        this.props.deleteOrder()
    }

    render() {
        return(
            <>
                <Title>Lista de pedidos</Title>
                {/* <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                    <Modal
                        id="modal-2"
                        isOpen={this.state.isOpen}
                        onRequestClose={this.handleOnClose}
                        title="Envie o pedido por email"
                    >
                        <FormSend onSubmit={this.sendEmail}>
                            <Input placeholder="Insira seu email" />  
                            <Button>Enviar</Button>
                        </FormSend>
                    </Modal>
                </div> */}
                {(this.state.listOrder.length < 1) ? (
                    <Observation>Ainda não foi feito nenhum pedido</Observation>
                ) : (
                    // <AlignButton><Button onClick={this.handleOnClick}>Fechar pedidos</Button></AlignButton>
                    <></>
                )}
                { this.state.listOrder.map(order => (
                    <Notes displayed={this.state.listOrder}>
                        <Delete onClick={() => this.props.deleteOrder(order.order.name)}>X</Delete>
                        <ul>
                            <ItemList key={Math.random()}><strong>{order.order.name}</strong></ItemList>
                            { order.order.order.map(item => (
                                <ItemList key={Math.random()}>{item.option}</ItemList>
                            )) }
                        </ul>  
                    </Notes>
                ))}
            </>
        )
    }
}

const mapStateToProps = state => ({
    orderList: state.orderList
})

const mapDispatchToProps = dispatch => 
bindActionCreators(orderActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);