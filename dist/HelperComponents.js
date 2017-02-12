(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.HelperComponents = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TriggerComponent = exports.WrappedComponent = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var WrappedComponent = function WrappedComponent(_ref) {
    var toggleMenus = _ref.toggleMenus,
        component = _ref.component,
        label = _ref.label;

    var TriggerComponent = component;
    return _react2.default.createElement(TriggerComponent, { toggleMenus: toggleMenus, label: label });
  };

  var TriggerComponent = function TriggerComponent(_ref2) {
    var toggleMenus = _ref2.toggleMenus,
        label = _ref2.label;
    return _react2.default.createElement(
      'div',
      { onClick: toggleMenus },
      label
    );
  };

  TriggerComponent.propTypes = {
    toggleMenus: _react.PropTypes.func.isRequired,
    label: _react.PropTypes.string.isRequired
  };

  WrappedComponent.propTypes = _extends({
    component: _react.PropTypes.func.isRequired
  }, TriggerComponent.propTypes);

  exports.WrappedComponent = WrappedComponent;
  exports.TriggerComponent = TriggerComponent;
});