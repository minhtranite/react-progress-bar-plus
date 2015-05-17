var React = require('react');

require('./bower_components/bootstrap-customize/css/bootstrap.css');
require('../src/progress-bar.scss');
require('./assets/styles/app.scss');

var Header = require('./components/Header');
var Footer = require('./components/Footer');
var ProgressBar = require('../src/ProgressBar');

var App = React.createClass({
  getInitialState: function () {
    return {
      percent: -1,
      autoIncrement: false,
      intervalTime: 200
    };
  },
  setPercent: function (percent) {
    return function () {
      this.setState({
        percent: percent
      });
    }.bind(this);
  },
  startWithAutoIncrement: function () {
    this.setState({
      percent: 0,
      autoIncrement: true,
      intervalTime: (Math.random() * 1000)
    });
  },
  render: function () {
    return (
      <div className={'layout-page'}>
        <Header/>
        <main className={'layout-main'}>
          <div className={'container'}>
            <ProgressBar percent={this.state.percent}
              autoIncrement={this.state.autoIncrement}
              intervalTime={this.state.intervalTime}/>

            <div className='text-center'>
              <div className='btn-group'>
                <button className='btn btn-default'
                  onClick={this.setPercent(0)}>
                  Start
                </button>
                <button className='btn btn-default'
                  onClick={this.setPercent(25)}>
                  Set 25
                </button>
                <button className='btn btn-default'
                  onClick={this.setPercent(50)}>
                  Set 50
                </button>
                <button className='btn btn-default'
                  onClick={this.setPercent(75)}>
                  Set 75
                </button>
                <button className='btn btn-default'
                  onClick={this.setPercent(100)}>Finish
                </button>
              </div>
            </div>
            <hr/>
            <div className='text-center'>
              <h4>
                Current intervalTime: <code>{this.state.intervalTime}</code>
              </h4>

              <div className='btn-group'>
                <button className='btn btn-default'
                  onClick={this.startWithAutoIncrement}>
                  Start with auto increment
                </button>
                <button className='btn btn-default'
                  onClick={this.setPercent(100)}>
                  Finish
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
});

React.render(<App />, document.body);

