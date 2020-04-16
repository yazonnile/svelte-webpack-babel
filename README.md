# svelte-webpack-babel
svelte + webpack + babel starter

# ` babel.config.json`
````json
{
  "presets": [
    [
      "@babel/env",
      {
        "useBuiltIns": "usage",
        "corejs": 3,
        "targets": {
          "browsers": [
            "> 0.5%",
            "last 2 major versions",
            "safari >= 9",
            "ie >= 11",
            "not dead"
          ]
        }
      }
    ]
  ]
}
````

# `webpack.config.json` - module part
```js
{
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules\/(?!svelte)/,
        use: ['babel-loader']
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules\/(?!svelte)/,
        use: ['babel-loader', {
          loader: 'svelte-loader',
          options: {
            dev: !isProduction,
          }
        }]
      }
    ]
  }
}
```
