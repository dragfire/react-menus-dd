(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Menu', 'prop-types', './menus.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Menu'), require('prop-types'), require('./menus.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.Menu, global.propTypes, global.menus);
    global.SubMenus = mod.exports;
  }
})(this, function (exports, _react, _Menu, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SubMenus = function SubMenus(props) {
    var list = props.list,
        children = props.children,
        style = props.style;

    var className = 'Menus';
    var MenuList = _react2.default.createElement(
      'ul',
      {
        className: className,
        style: style
      },
      children
    );

    if (!list) {
      MenuList = _react2.default.createElement(
        'div',
        {
          className: className,
          style: style
        },
        children
      );
    }
    return MenuList;
  };

  SubMenus.propTypes = {
    list: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.arrayOf(_Menu2.default)]).isRequired
  };

  SubMenus.defaultProps = {
    list: true,
    style: null,
    label: null
  };

  exports.default = SubMenus;
});