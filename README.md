# What is this repo for
This project serves as a sandbox environment to experiment.

The `micro-frontends` architecture used in here is a bit unwieldy in comparison with using `module federation` introduced in `webpack 5`. However, `webpack 5` was not invented when this architecture was concocted.

# Core Concepts
Core concepts involved include `react`, `server side render` through `express`, `server side include` or `ssi` for short, and `reverse proxying` through `nginx`.

# Configurations

`webpack.config.js` contains config for both `client` and `server`.  
`server/index.js` contains `express` request handlers that generate static html for client. `react`'s `hydrate()` call is attached as static `script` in the handler.  
`clientConfig entry` should include all relevant `hydrate()` for all server side rendered pages. This way, `webpack` knows where to start traversing the dependency tree and eventually bundle dependencies correctly.

note `<script src="/app1/static/clientSideRouting.js"></script>` in `app1/src/server/index.js` requires the `express.static()` 


`app1/src/public/components/HeaderSDK.js` normally would live in `app2` and gets published to npm. The complexity is not necessary for such a sandbox environment. Having it directly in the consumer `app1` simplifies things.  





