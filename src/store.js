function newCodeGenerator (set) {
  let newCode = Math.floor(Math.random() * 100000 + 1);
  if (set.has(newCode)) {
    return newCodeGenerator(set);
  } else {
    return newCode;
  }        
}


/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.codes = new Set(this.state.list.map((el) => el.code));
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {   
    let codesSet = this.codes;
    let code = newCodeGenerator(codesSet);
    codesSet.add(code);
       
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: code, title: 'Новая запись', count: 0}]
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду///
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;
          if (item.selected) item.count = item.count+1;
        } else { 
          item.selected = false;
        }
        return item;
      })
    })
  }
}

export default Store;
