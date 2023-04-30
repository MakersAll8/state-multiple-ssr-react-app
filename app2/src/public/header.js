import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import { Header } from './components/Header'
import { subscribe, snapshot } from 'valtio/vanilla';
import { subscribeKey } from 'valtio/utils'
import { headerState } from './state/headerState';

hydrateRoot(
  document.getElementById('header'),
  <Header />
)

window.__header__ = window.__header__ || {};
window.__header__.subscribe = (...args)=>{
  console.log('subscribe is invoked')
  return subscribe(...args)
};
window.__header__.snapshot = snapshot;
window.__header__.subscribeKey = subscribeKey;
window.__header__.headerState = headerState;