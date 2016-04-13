'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _components = {
  _$ProgressBar: {
    displayName: 'ProgressBar'
  }
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: '/home/dmitry/projects/react-progress-bar-plus/src/ProgressBar.js',
  components: _components,
  locals: [module],
  imports: [_react]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper(ReactClass, uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ProgressBar = (function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    var _this = this;

    _classCallCheck(this, _ProgressBar);

    _get(Object.getPrototypeOf(_ProgressBar.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      percent: this.props.percent
    };

    this.increment = function () {
      var percent = _this.state.percent + (Math.random() + 1 - Math.random());
      percent = percent < 99 ? percent : 99;
      _this.setState({
        percent: percent
      });
    };

    this.handleProps = function (props) {
      if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
        _this.interval = setInterval(_this.increment, props.intervalTime);
      }

      if (props.percent >= 100) {
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
          percent: props.percent
        });
      }
    };

    this.componentDidMount = function () {
      _this.handleProps(_this.props);
    };

    this.componentWillReceiveProps = function (nextProps) {
      if (_this.interval) {
        clearInterval(_this.interval);
      }
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }
      _this.handleProps(nextProps);
    };

    this.componentWillUnmount = function () {
      if (_this.interval) {
        clearInterval(_this.interval);
      }
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }
    };
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2['default'])({
        'react-progress-bar': true,
        'react-progress-bar-on-top': this.props.onTop,
        'react-progress-bar-hide': this.state.percent < 0 || this.state.percent >= 100
      });
      var style = { width: (this.state.percent < 0 ? 0 : this.state.percent) + '%' };
      return _react2['default'].createElement(
        'div',
        { className: className },
        _react2['default'].createElement('div', { className: 'react-progress-bar-percent', style: style }),
        this.props.showSpinner ? _react2['default'].createElement(
          'div',
          { className: 'react-progress-bar-spinner' },
          _react2['default'].createElement('div', { className: 'react-progress-bar-spinner-icon' })
        ) : null
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      percent: _react2['default'].PropTypes.number.isRequired,
      onTop: _react2['default'].PropTypes.bool,
      autoIncrement: _react2['default'].PropTypes.bool,
      intervalTime: _react2['default'].PropTypes.number,
      showSpinner: _react2['default'].PropTypes.bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      percent: -1,
      onTop: false,
      autoIncrement: false,
      intervalTime: 200,
      showSpinner: true
    },
    enumerable: true
  }]);

  var _ProgressBar = ProgressBar;
  ProgressBar = _wrapComponent('_$ProgressBar')(ProgressBar) || ProgressBar;
  return ProgressBar;
})(_react2['default'].Component);

exports['default'] = ProgressBar;
module.exports = exports['default'];