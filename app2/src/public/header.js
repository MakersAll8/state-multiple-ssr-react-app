import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import { Header } from './components/Header'
import { createStore } from 'redux';
import { counterReducer } from './reducers';
import { Provider } from 'react-redux';

const preloadedState = window.__PRELOADED_STATE__;
// delete window.__PRELOADED_STATE__;

const store = createStore(counterReducer, preloadedState);

hydrateRoot(
  document.getElementById('header'),
  <Provider store={store}><Header /></Provider>
)

window.__header__ = window.__header__ || {};
window.__header__.store ? null: window.__header__.store = store

console.log('header.js ran')