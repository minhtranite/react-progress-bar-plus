import React from 'react';
import ProgressBar from 'react-progress-bar-plus';

class Example1 extends React.Component {
  state = {
    percent: -1,
    intervalTime: 200
  };

  setPercent = (percent) => {
    return () => {
      this.setState({
        percent: percent
      });
    };
  };

  start = () => {
    this.setState({
      percent: 0,
      intervalTime: (Math.random() * 1000)
    });
  };

  render() {
    return (
      <div>
        <ProgressBar percent={this.state.percent}
          autoIncrement={true}
          intervalTime={this.state.intervalTime}/>

        <div className='text-center'>
          <h4>
            Current intervalTime: <code>{this.state.intervalTime}</code>
          </h4>
          <div className='btn-group'>
            <button className='btn btn-default' onClick={this.start}>
              Start
            </button>
            <button className='btn btn-default' onClick={this.setPercent(25)}>
              Set 25
            </button>
            <button className='btn btn-default' onClick={this.setPercent(50)}>
              Set 50
            </button>
            <button className='btn btn-default' onClick={this.setPercent(75)}>
              Set 75
            </button>
            <button className='btn btn-default' onClick={this.setPercent(100)}>
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Example1;
