import React from 'react';
import {createElement} from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  function pluralize(num, word1, word2) {
    const numStr = num.toString();
    const val = numStr.length >= 2 ? numStr.slice(-1) : numStr;
    const valPrevious = numStr.length >= 2 ? numStr.slice(-2,-1) : '0';
    const wordNeeded = (val === '2'||val === '3'||val === '4') && (valPrevious !== '1') ? word2 : word1;
    return wordNeeded;
    }

  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}
                   onClick={() => store.selectItem(item.code, item.count)}>
                <div className='Item-code'>{item.code}</div>
                <div className='Item-title'>{item.title}<span>{item.count === 0 ? '' : ` | Выделяли ${item.count} ${pluralize(item.count, 'раз', 'раза')}`}</span></div>
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
