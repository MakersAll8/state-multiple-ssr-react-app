import React from 'react'
import {hydrateRoot} from 'react-dom/client'
import { ClientSideRouting } from './components/ClientSideRouting'
import {BrowserRouter as Router} from 'react-router-dom'

const ClientSideRoutingRouter = () => (
    <Router>
      <ClientSideRouting/>
    </Router>
)

hydrateRoot(
  document.getElementById('root'),
  <ClientSideRoutingRouter/>
)