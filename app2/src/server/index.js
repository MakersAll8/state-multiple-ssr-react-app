import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server';
import { Header } from '../public/components/Header';
import { Provider } from 'react-redux';
import { store } from '../public/store';

const app = express()

const apiRouter = express.Router();

apiRouter.use('/static', express.static(path.resolve(__dirname, 'public')))

apiRouter.get('/header', (req, res) => {
  const component = renderToString(<Provider store={store}><Header/></Provider>)

  const preloadedState = JSON.stringify(store.getState());

  const html = `<div id="header">${component}</div>
    <script>
      window.__PRELOADED_STATE__ = ${preloadedState};
    </script>
    <script src="/app2/static/header.js"></script>`;
  res.send(html);
})

app.use("/app2", apiRouter)
app.listen(3000)