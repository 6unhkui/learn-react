// 데코레이터 사용을 위한 babel 설정 주입
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config) {
  config = injectBabelPlugin(['@babel/plugin-proposal-decorators', {
    "legacy": true
  }], config);

  return config;
}