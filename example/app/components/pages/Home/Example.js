import React from 'react';
import ProgressBar from 'react-progress-bar-plus';

class Example extends React.Component {
  state = {
    percent: -1
  };

  setPercent = (percent) => {
    return () => {
      this.setState({
        percent: percent
      });
    };
  };

  render() {
    return (
      <div>
        <ProgressBar percent={this.state.percent}/>
        <div className='text-center'>
          <div className='btn-group'>
            <button className='btn btn-default' onClick={this.setPercent(0)}>
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

export default Example;
