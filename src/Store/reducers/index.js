import orderList from './OrderList';
import chooseIngredient from './ChooseIngredient';
import { combineReducers } from 'redux';

export default combineReducers({
    orderList,
    chooseIngredient
});