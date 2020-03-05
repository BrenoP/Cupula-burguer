import React, { Component } from 'react';
import '../../Assets/css/style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chooseIngredients from '../../Store/actions/ChooseIngredients';

class RadioCheck extends Component {

    render() {
        if(this.props.order.value === "ingredients") {
            return(
               <div className="radio">
                  <ul>
                     <li>
                     <input 
                           type="checkbox" 
                           id={this.props.order.value + this.props.order.id_request} 
                           name={this.props.order.value + this.props.order.id_request} 
                           onChange={() => { 
                              this.props.chooseIngredient(this.props.order.id_request, this.props.order.value, this.props.order.option)
                           }}  
                     />
                     <label 
                        for={this.props.order.value + this.props.order.id_request}>
                        {this.props.order.option}
                     </label>
                     <div className="check"></div>
                     </li>
                  </ul>
               </div>
            );
        } else {
         return(
            <div className="radio">
               <ul>
                  <li>
                     <input 
                        type="radio" 
                        id={this.props.order.id_request + this.props.order.value} 
                        name={this.props.order.value} 
                        onChange={() => { 
                           this.props.chooseOption(this.props.order.value, this.props.order.option)
                        }}
                     />
                     <label 
                        for={this.props.order.id_request + this.props.order.value}>
                        {this.props.order.option}
                     </label>
                     <div className="check"></div>
                  </li>
               </ul>
            </div>
         );
      }
   }
}

const mapStateToProps = state => ({
   chooseIngredient: state.chooseIngredient,
});

const mapDispatchToProps = dispatch => 
   bindActionCreators(chooseIngredients, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RadioCheck);