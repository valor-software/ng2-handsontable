'use strict';

var path = require('path');
var marked = require('marked');
var webpack = require('webpack');

var Clean = require('clean-webpack-plugin');

// marked renderer hack
marked.Renderer.prototype.code = function (code, lang) {
  var out = this.options.highlight(code, lang);

  if (!lang) {
    return '<pre><code>' + out + '\n</code></pre>';
  }

  var classMap = this.options.langPrefix + lang;
  return '<pre class="' + classMap + '"><code class="' + classMap + '">' + out + '\n</code></pre>\n';
};

/*eslint no-process-env:0, camelcase:0*/
var isProduction = (process.env.NODE_ENV || 'development') === 'production';

var src = 'demo';
//var absSrc = path.join(__dirname, src);
var dest = '/build';
var absDest = path.join(__dirname, dest);

var config = {
  // isProduction ? 'source-map' : 'evale',
  devtool: 'source-map',
  // debug: true,
  cache: true,

  // verbose: true,
  // displayErrorDetails: true,
  context: __dirname,
  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      'handsontable-formula': path.resolve(src, 'external/handsontable.formula.js')
    }
  },

  entry: {
    angular2: [
      // Angular 2 Deps
      'zone.js',
      'reflect-metadata'
    ],
    'angular2-handsontable': [path.resolve('components')],
    'angular2-handsontable-demo': [path.resolve('demo')]
  },

  output: {
    path: absDest,
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  // our Development Server configs
  devServer: {
    inline: true,
    // colors: true,
    historyApiFallback: true,
    contentBase: src,
    publicPath: dest
  },

  module: {
    loaders: [
      // Provide Handsontable
      {
        test: /\/handsontable\.formula\.js$/,
        loader: 'imports-loader?Handsontable=handsontable/dist/handsontable.full.js'
      },

      // support markdown
      {test: /\.md$/, loader: 'html-loader!markdown-loader'},

      // Support for *.json files.
      {test: /\.json$/, loader: 'json-loader'},

      // Support for CSS as raw text
      {test: /\.css$/, loader: 'raw-loader'},

      // support for .html as raw text
      {test: /\.html$/, loader: 'raw-loader'},

      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          ignoreDiagnostics: [
            6053,
            // TS2305 -> Module 'ng' has no exported member
            2305,
            // TS2307 ->  Cannot find external module
            2307,
            // TS2300 -> Duplicate identifier
            2300,
            // TS2309 -> An export assignment cannot be used in a module with other exported elements.
            2309
          ]
        },
        exclude: [
          /\.min\.js$/,
          /\.spec\.ts$/,
          /\.e2e\.ts$/,
          /web_modules/,
          /test/
        ]
      }
    ],
    noParse: [
      /rtts_assert\/src\/rtts_assert/,
      /reflect-metadata/
    ]
  },

  plugins: [
    new Clean(['build']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'angular2',
      minChunks: Infinity,
      filename: 'angular2.js'
    }),
    // Deactivated for now due to https://github.com/webpack/webpack/issues/2644
    // new webpack.optimize.DedupePlugin({
    //   __isProduction: isProduction
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin()
    new webpack.LoaderOptionsPlugin({
      test: /\.md$/,
      options: {
        markdownLoader: {
          langPrefix: 'language-',
          highlight: function (code, lang) {
            var language = !lang || lang === 'html' ? 'markup' : lang;
            if (!global.Prism) {
              global.Prism = require('prismjs');
            }
            var Prism = global.Prism;
            if (!Prism.languages[language]) {
              require('prismjs/components/prism-' + language + '.js');
            }
            return Prism.highlight(code, Prism.languages[language]);
          }
        }
      }
    })
  ]
};

//production only
if (isProduction) {
  config.plugins.push.apply(config.plugins, [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: false
      },
      output: {
        comments: false
      },
      beautify: false
    })
  ]);
}

module.exports = config;
