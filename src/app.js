import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";
import CartNav from "./components/cartNav";


/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const[modalActive, setModalActive] = useState(false);
  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    // onDeleteItem: useCallback((code) => {
    //   store.deleteItem(code);
    // }, [store]),

    // onSelectItem: useCallback((code) => {
    //   store.selectItem(code);
    // }, [store]),

  //   onAddItem: useCallback(() => {
  //     store.addItem();
  //   }, [store]),
   
    onSetItemToCart: useCallback((code) => {
      store.setItemToCart(code);
    }, [cart]),

    onRemoveFromCart: useCallback((code) => {
      store.removeItemFromCart(code);
    }, [cart])
  }
  const makeData = (cart) => {
    let set = new Set(cart.map(i => i.code));
    let items = [];
    let item;
    set.forEach(el => {
      let amountItem = 0;
      cart.forEach(i => { if (i.code === el) {
        amountItem +=1;
        item = {amount: amountItem, title: i.title, code: i.code, price: i.price}; 
      }})
      items.push(item);
    })
    let total = items.map(i => i.price * i.amount).reduce((acc, i) => i + acc, 0);
    let amount = set.size;
    return [items, total, amount];

} 
const [resultArr, total, amount] = makeData(cart, list);


  return (
    <PageLayout>
      <Head title='Магазин'/>
      {/* <Controls onAdd={callbacks.onAddItem}/> */}
      <CartNav setActive={setModalActive} total={total} amount={amount}/>
      <Modal active={modalActive} total={total} setActive={setModalActive} resultArr={resultArr} removeFromCart={callbacks.onRemoveFromCart}/>
      <List list={list}
           setItemToCart={callbacks.onSetItemToCart}/>
      </PageLayout>
  );
}

export default App;
