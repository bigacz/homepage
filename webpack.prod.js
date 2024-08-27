const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  extends: path.resolve(__dirname, './webpack.common.js'),
  mode: 'production',
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
