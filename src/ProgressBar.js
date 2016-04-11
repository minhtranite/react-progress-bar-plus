import React from 'react';
import classnames from 'classnames';

class ProgressBar extends React.Component {
  static propTypes = {
    percent: React.PropTypes.number.isRequired,
    onTop: React.PropTypes.bool,
    autoIncrement: React.PropTypes.bool,
    intervalTime: React.PropTypes.number,
    showSpinner: React.PropTypes.bool
  };

  static defaultProps = {
    percent: -1,
    onTop: false,
    autoIncrement: false,
    intervalTime: 200,
    showSpinner: true
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

  handleProps = (props) => {
    if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
      this.interval = setInterval(this.increment, props.intervalTime);
    }

    if (props.percent >= 100) {
      this.setState({
        percent: 99.9
      }, () => {
        this.timeout = setTimeout(() => {
          this.setState({
            percent: -1
          });
        }, 400);
      });
    } else {
      this.setState({
        percent: props.percent
      });
    }
  };

  componentDidMount = () => {
    this.handleProps(this.props);
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.handleProps(nextProps);
  };

  componentWillUnmount = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  render() {
    let className = classnames({
      'react-progress-bar': true,
      'react-progress-bar-on-top': this.props.onTop,
      'react-progress-bar-hide': this.state.percent < 0 || this.state.percent >= 100
    });
    let style = {width: (this.state.percent < 0 ? 0 : this.state.percent) + '%'};
    return (
      <div className={className}>
        <div className="react-progress-bar-percent" style={style}/>
        {
          this.props.showSpinner ?
            <div className="react-progress-bar-spinner">
              <div className="react-progress-bar-spinner-icon"/>
            </div>
          : null
        }
      </div>
    );
  }
}

export default ProgressBar;
