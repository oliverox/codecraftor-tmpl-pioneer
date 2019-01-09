const fs = require('fs');
const path = require('path');

const isDirectory = source => fs.statSync(source).isDirectory();

const getAllEntries = (dir) => {
  const entries = {};
  fs.readdirSync(`./src/${dir}`).map(name => {
    if (isDirectory(`./src/${dir}/${name}`)) {
      entries[name] = `./src/${dir}/${name}/${name}`;
    }
  });
  console.log(entries);
  return entries;
};

module.exports = [{
  entry: getAllEntries('blocks'),
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/blocks'),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
}, {
  entry: getAllEntries('components'),
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist/components'),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
}, {
  entry: {
    main: './main'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  }
}];
