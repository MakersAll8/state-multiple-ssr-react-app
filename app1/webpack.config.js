const nodeExternals = require("webpack-node-externals");
const path = require("path");

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ["@babel/preset-env",
        "@babel/preset-react"],
        plugins: ['transform-class-properties']
      }
    }
  }

const serverConfig = {
    mode: 'development',
    target: 'node',
    node: {
        __dirname: false
    },
    externals: [nodeExternals()],
    entry: {
        'index.js': path.resolve(__dirname, 'src/server/index.js')
    },
    module: {
        rules: [js]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    }
}

const clientConfig = {
    mode: 'development',
    target: 'web',
    entry: {
      'home.js': path.resolve(__dirname, 'src/public/home.js'),
      'clientSideRouting.js': path.resolve(__dirname, 'src/public/clientSideRouting.js')
    },
    module: {
      rules: [js]
    },
    output: {
      path: path.resolve(__dirname, 'dist/public'),
      filename: '[name]'
    }
  }

  module.exports = [serverConfig, clientConfig]