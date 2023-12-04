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
  let total = cart.map(i => i.price * i.amount).reduce((acc, i) => i + acc, 0);
  let amount = cart.length;

  return (
    <PageLayout>
      <Head title='Магазин'/>
      {/* <Controls onAdd={callbacks.onAddItem}/> */}
      <CartNav setActive={setModalActive} total={total} amount={amount}/>
      <Modal active={modalActive} total={total} setActive={setModalActive} cart={cart} removeFromCart={callbacks.onRemoveFromCart}/>
      <List list={list}
           setItemToCart={callbacks.onSetItemToCart}/>
      </PageLayout>
  );
}

export default App;
