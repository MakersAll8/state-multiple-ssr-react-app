import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import { Home } from './components/Home'
import { Provider } from 'react-redux';

const {store} = window.__header__;
window.__header__.homeStore = store;

hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}><Home /></Provider>
)

console.log('home ran')

// const a = {b:1 , c:2};

// function t(a){
//   a.b=2;
//   a = {}
// }

// t(a);

// console.log(a) // if pass by reference -> expect a = {}
// // if pass by value, expect -> a = {b:2, c: 2}