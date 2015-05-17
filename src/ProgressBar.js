var React = require('react');

var ProgressBar = React.createClass({
  propTypes: {
    percent: React.PropTypes.number.isRequired,
    onTop: React.PropTypes.bool,
    autoIncrement: React.PropTypes.bool,
    intervalTime: React.PropTypes.number
  },
  getDefaultProps: function () {
    return {
      percent: -1,
      onTop: false,
      autoIncrement: false,
      intervalTime: 200
    };
  },
  getInitialState: function () {
    return {
      percent: this.props.percent
    };
  },
  increment: function () {
    var percent = this.state.percent + (Math.random() + 1 - Math.random());
    percent = percent < 99 ? percent : 99;
    this.setState({
      percent: percent
    });
  },
  componentWillUnmount: function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (this.interval) {
      clearInterval(this.interval);
    }

    if (nextProps.autoIncrement && nextProps.percent >= 0 && nextProps.percent < 99) {
      this.interval = setInterval(this.increment, nextProps.intervalTime);
    }

    if (nextProps.percent >= 100) {
      this.setState({
        percent: 99.9
      }, function () {
        setTimeout(function () {
          this.setState({
            percent: 100
          });
        }.bind(this), 400);
      });
    } else {
      this.setState({
        percent: nextProps.percent
      });
    }
  },
  render: function () {
    var className = 'react-progress-bar' + (this.props.onTop ? ' react-progress-bar-on-top' : '');
    if (this.state.percent < 0 || this.state.percent >= 100) {
      className += ' react-progress-bar-hide';
    }
    var style = {width: this.state.percent + '%'};
    return (
      <div className={className}>
        <div className='react-progress-bar-percent' style={style}/>
        <div className='react-progress-bar-spinner'>
          <div className='react-progress-bar-spinner-icon'></div>
        </div>
      </div>
    );
  }
});

module.exports = ProgressBar;
