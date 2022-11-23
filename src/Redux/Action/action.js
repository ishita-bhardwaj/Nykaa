export const ACCOUNT_DATA = 'ACCOUNT_DATA';
export const ORDER_LIST = 'ORDER_LIST';

export const AccData = () => {
  const accData = require('../../Data/AccountData.json');
  //console.log(accData);
  return {type: ACCOUNT_DATA, payload: accData};
};

export const OrderList = () => {
  const OrderListData = require('../../Data/OrderList.json');
  //console.log('ORDERLISTDATA', OrderListData);
  return {type: ORDER_LIST, payload: OrderListData};
};
