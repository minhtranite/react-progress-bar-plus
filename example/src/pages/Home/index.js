import React from 'react';
import Document from 'components/Document';
import ProgressBar from 'react-progress-bar-plus';

class PageHome extends React.Component {
  state = {
    percent: -1
  };

  setPercent = percent => () => {
    this.setState({
      percent
    });
  };

  render() {
    return (
      <Document title="Home | React progress bar plus" className="page-home">
        <div>
          <ProgressBar className="custom-class" percent={this.state.percent}/>
          <br/>
          <div className="text-center">
            <div className="btn-group">
              <button className="btn btn-default" onClick={this.setPercent(0)}>
                Start
              </button>
              <button className="btn btn-default" onClick={this.setPercent(25)}>
                Set 25
              </button>
              <button className="btn btn-default" onClick={this.setPercent(50)}>
                Set 50
              </button>
              <button className="btn btn-default" onClick={this.setPercent(75)}>
                Set 75
              </button>
              <button
                className="btn btn-default"
                onClick={this.setPercent(100)}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </Document>
    );
  }
}

export default PageHome;
