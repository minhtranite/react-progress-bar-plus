import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProgressBar from 'react-progress-bar-plus';

import './bower_components/bootstrap-customize/css/bootstrap.css';
import 'react-progress-bar-plus/src/progress-bar.scss';
import './assets/styles/app.scss';

class App extends React.Component {
  state = {
    percent: -1,
    autoIncrement: false,
    intervalTime: 200
  };

  setPercent = (percent) => {
    return () => {
      this.setState({
        percent: percent
      });
    };
  };

  startWithAutoIncrement = () => {
    this.setState({
      percent: 0,
      autoIncrement: true,
      intervalTime: (Math.random() * 1000)
    });
  };

  render() {
    return (
      <div className='layout-page'>
        <Header/>
        <main className='layout-main'>
          <div className='container'>
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
}

function run() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
