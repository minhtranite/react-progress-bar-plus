export default {
  path: 'auto-increment',
  getComponent(location, callback) {
    require.ensure([], require => {
      callback(null, require('components/pages/AutoIncrement'));
    }, 'page-auto-increment');
  }
};
