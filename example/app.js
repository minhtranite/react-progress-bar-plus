var React = require('react');

require('./bower_components/bootstrap-customize/css/bootstrap.css');
require('./assets/styles/app.scss');

var Header = require('./components/Header');
var Footer = require('./components/Footer');
var Component = require('../src/Component');

var App = React.createClass({
  render: function () {
    return (
      <div className={"layout-page"}>
        <Header/>
        <main className={"layout-main"}>
          <div className={"container"}>
            <Component/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
});

React.render(<App />, document.body);

