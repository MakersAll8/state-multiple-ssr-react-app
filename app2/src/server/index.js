import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server';
import { Header } from '../public/components/Header';

const app = express()

const apiRouter = express.Router();

apiRouter.use('/static', express.static(path.resolve(__dirname, 'public')))

apiRouter.get('/header', (req, res) => {
  const component = renderToString(<Header/>)

  const html = `<div id="header">${component}</div>
    <script src="/app2/static/header.js"></script>`;
  res.send(html);
})

app.use("/app2", apiRouter)
app.listen(3000)