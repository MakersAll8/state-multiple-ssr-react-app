import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server';
import { Home } from '../public/components/Home';
import { StaticRouter as Router } from "react-router-dom/server";
import { ClientSideRouting } from '../public/components/ClientSideRouting';

const app = express()

const apiRouter = express.Router();

apiRouter.use('/static', express.static(path.resolve(__dirname, 'public')))

apiRouter.get('/client-side-routing*', (req, res) => {
  const component = renderToString(<Router><ClientSideRouting /></Router>);
  const html = `
    <!doctype html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style>
          body { font-family: Arial, sans-serif; font-size: 15px; }
        </style>
      </head>
      <body>
        <div id="root">${component}</div>
        <script src="/app1/static/clientSideRouting.js"></script>
      </body>
      </html>`;
    res.send(html);
})

apiRouter.get('/', (req, res) => {
  const { name = "World" } = req.query;

  const component = renderToString(<Home name={name}/>)

  const html = `
  <!doctype html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <style>
        body { font-family: Arial, sans-serif; font-size: 15px; }
      </style>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({ name })}</script>
    </head>
    <body>
    <div id="root">${component}</div>
    <script src="/app1/static/home.js"></script>
  </body>
  </html>`;
  
  res.send(html)
})

app.use("/app1", apiRouter)
app.listen(3000)