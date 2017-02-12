(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './arrow_right.png', './menu.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./arrow_right.png'), require('./menu.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.arrow_right, global.menu);
    global.Menu = mod.exports;
  }
})(this, function (exports, _react, _arrow_right) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _arrow_right2 = _interopRequireDefault(_arrow_right);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Styles = {
    arrowRight: {
      position: 'absolute',
      right: 5,
      top: '35%',
      width: 12,
      height: 12
    }
  };

  var Menu = function Menu(props) {
    var link = props.link,
        _onClick = props.onClick,
        children = props.children,
        text = props.text,
        style = props.style;

    return _react2.default.createElement(
      'li',
      { className: 'Menu' },
      _react2.default.createElement(
        'a',
        {
          href: link,
          onClick: function onClick() {
            return _onClick(text);
          },
          className: 'Menu-link',
          style: style
        },
        text
      ),
      children ? _react2.default.createElement('img', { src: _arrow_right2.default, style: Styles.arrowRight, alt: 'arrow' }) : null,
      children
    );
  };

  Menu.propTypes = {
    link: _react2.default.PropTypes.string,
    text: _react2.default.PropTypes.string.isRequired,
    style: _react2.default.PropTypes.object,
    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object, _react2.default.PropTypes.func]),
    onClick: _react2.default.PropTypes.func
  };

  Menu.defaultProps = {
    link: '#',
    onClick: function onClick(value) {
      return console.info(value);
    },
    children: null,
    style: null
  };

  exports.default = Menu;
});