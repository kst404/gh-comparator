/**
 * - Использовать утилиты для генерации actions и action creators (redux-act, redux-actions, FSA)
 * - выбрать какой тип async actions использовать: thunk, promise или который сразу умеет создавать все actions для ajax запроса
 * - выбрать лучшее решение для хранения state: чтобы избежать ручного изменения (immute, normalizr, ...)
 * - выбрать утилиту для упрощения написания reducers, чтоб обойтись без switch
 * - понять как упростить вызов action creators из обработчиков событий html-элементов
 */

/**
 * Бизнес-логика разделяется между containers, reducers и action creators
 * нужно определить кто из них какую часть делает, например, action creators могут делать все, что связано с работой с ajax rest api
 */

// import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App.Container'

import reducers from './reducers'
const store = createStore(reducers)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
