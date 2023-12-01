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
  const [cart, setCart] = useState([]);
  const list = store.getState().list;

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
   
    onSetItemToCart: useCallback((item) => {
      setCart([...cart, item]);  
    }, [cart]),

    onRemoveFromCart: useCallback((title) => {
      const listItems = cart.filter((item) => item !== title);
      setCart(listItems);
    }, [cart])
  }
  const makeData = (arr, list) => {
    let set = new Set(arr);
    let items = [];
    set.forEach((el) => {
        let amount = 0;
        arr.forEach((i) => {
           if (i === el) amount +=1}) 
        let item = {'title': el, 'amount': amount};
        list.forEach((i) => {
          if (i.title === item.title) {
            item.code = i.code;
            item.price = i.price;
          }
        })
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
