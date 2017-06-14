'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProgressBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      percent: _this.props.percent
    }, _this.componentDidMount = function () {
      _this.handleProps(_this.props);
    }, _this.componentWillReceiveProps = function (nextProps) {
      if (_this.interval) {
        clearInterval(_this.interval);
      }
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }
      _this.handleProps(nextProps);
    }, _this.componentWillUnmount = function () {
      if (_this.interval) {
        clearInterval(_this.interval);
      }
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }
    }, _this.increment = function () {
      var percent = _this.state.percent;

      percent += Math.random() + 1 - Math.random();
      percent = percent < 99 ? percent : 99;
      _this.setState({
        percent: percent
      });
    }, _this.handleProps = function (props) {
      var autoIncrement = props.autoIncrement,
          percent = props.percent,
          intervalTime = props.intervalTime;

      if (autoIncrement && percent >= 0 && percent < 99) {
        _this.interval = setInterval(_this.increment, intervalTime);
      }

      if (percent >= 100) {
        _this.setState({
          percent: 99.9
        }, function () {
          _this.timeout = setTimeout(function () {
            _this.setState({
              percent: -1
            });
          }, 400);
        });
      } else {
        _this.setState({
          percent: percent
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onTop = _props.onTop,
          spinner = _props.spinner;
      var className = this.props.className;
      var percent = this.state.percent;

      className = (0, _classnames3.default)('react-progress-bar', className, {
        'react-progress-bar-on-top': onTop,
        'react-progress-bar-hide': percent < 0 || percent >= 100
      });
      var style = { width: (percent < 0 ? 0 : percent) + '%' };
      var spinnerClassName = (0, _classnames3.default)('react-progress-bar-spinner', _defineProperty({}, 'react-progress-bar-spinner-' + spinner, spinner));
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('div', { className: 'react-progress-bar-percent', style: style }),
        spinner ? _react2.default.createElement(
          'div',
          { className: spinnerClassName },
          _react2.default.createElement('div', { className: 'react-progress-bar-spinner-icon' })
        ) : null
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

ProgressBar.propTypes = {
  className: _propTypes2.default.string,
  percent: _propTypes2.default.number.isRequired,
  onTop: _propTypes2.default.bool,
  autoIncrement: _propTypes2.default.bool,
  intervalTime: _propTypes2.default.number,
  spinner: _propTypes2.default.oneOf([false, 'left', 'right'])
};
ProgressBar.defaultProps = {
  className: '',
  percent: -1,
  onTop: false,
  autoIncrement: false,
  intervalTime: 200,
  spinner: 'left'
};
exports.default = ProgressBar;
module.exports = exports['default'];