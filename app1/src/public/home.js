import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import { Home } from './components/Home'
import { Provider } from 'react-redux';

const {store} = window.__header__;

hydrateRoot(
  document.getElementById('root'),
  <Provider store={store}><Home /></Provider>
)