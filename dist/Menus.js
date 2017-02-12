(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Menu', './menus.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Menu'), require('./menus.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Menu, global.menus);
    global.Menus = mod.exports;
  }
})(this, function (exports, _react, _Menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Menu2 = _interopRequireDefault(_Menu);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Menus = function Menus(props) {
    var list = props.list,
        children = props.children,
        style = props.style;

    var className = 'Menus';
    var MenuList = _react2.default.createElement(
      'ul',
      { className: className, style: style },
      children
    );

    if (!list) {
      MenuList = _react2.default.createElement(
        'div',
        { className: className, style: style },
        children
      );
    }
    return MenuList;
  };

  Menus.propTypes = {
    list: _react2.default.PropTypes.bool,
    style: _react2.default.PropTypes.object,
    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.element, _react2.default.PropTypes.func, _react2.default.PropTypes.arrayOf(_Menu2.default)]).isRequired
  };

  Menus.defaultProps = {
    list: true,
    style: null
  };

  exports.default = Menus;
});