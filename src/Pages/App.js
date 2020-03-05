import React from 'react';
import Order from './Order/Order';
import OrderList from './OrderList/OrderList';
import { Provider } from 'react-redux';
import store from '../Store/store';

function App() {
  return (
    <Provider store={store}>
      <Order />
      <OrderList />
    </Provider>
  );  
}

export default App;
