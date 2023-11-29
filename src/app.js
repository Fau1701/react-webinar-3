import React, {useCallback, useState} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from "./components/modal";
import ButtonModal from "./components/modal";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const[modalActive, setModalActive] = useState(false);

  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Приложение на чистом JS'/>
      {/* <Controls onAdd={callbacks.onAddItem}/> */}
      <ButtonModal setActive={setModalActive}/>
      <Modal active={modalActive} setActive={setModalActive}>
          <div>
            <div>cписок</div>
            <button>сделать что-то</button>
          </div>
      </Modal>
      <List list={list}
            onDeleteItem={callbacks.onDeleteItem}
            onSelectItem={callbacks.onSelectItem}/>
    </PageLayout>
  );
}

export default App;
