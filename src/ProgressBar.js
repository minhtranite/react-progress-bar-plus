import React from 'react';
import ClassNames from 'classnames';

class ProgressBar extends React.Component {
  static propTypes = {
    percent: React.PropTypes.number.isRequired,
    onTop: React.PropTypes.bool,
    autoIncrement: React.PropTypes.bool,
    intervalTime: React.PropTypes.number
  };

  static defaultProps = {
    percent: -1,
    onTop: false,
    autoIncrement: false,
    intervalTime: 200
  };

  state = {
    percent: this.props.percent
  };

  increment = () => {
    let percent = this.state.percent + (Math.random() + 1 - Math.random());
    percent = percent < 99 ? percent : 99;
    this.setState({
      percent: percent
    });
  };

  componentWillUnmount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.interval) {
      clearInterval(this.interval);
    }

    if (nextProps.autoIncrement && nextProps.percent >= 0 && nextProps.percent < 99) {
      this.interval = setInterval(this.increment, nextProps.intervalTime);
    }

    if (nextProps.percent >= 100) {
      this.setState({
        percent: 99.9
      }, () => {
        setTimeout(() => {
          this.setState({
            percent: -1
          });
        }, 400);
      });
    } else {
      this.setState({
        percent: nextProps.percent
      });
    }
  };

  render() {
    let className = ClassNames({
      'react-progress-bar': true,
      'react-progress-bar-on-top': this.props.onTop,
      'react-progress-bar-hide': this.state.percent < 0 || this.state.percent >= 100
    });
    let style = {width: (this.state.percent < 0 ? 0 : this.state.percent) + '%'};
    return (
      <div className={className}>
        <div className='react-progress-bar-percent' style={style}/>
        <div className='react-progress-bar-spinner'>
          <div className='react-progress-bar-spinner-icon'></div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
