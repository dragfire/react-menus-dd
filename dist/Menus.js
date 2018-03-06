(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-dom', './Menu', './SubMenus', './HelperComponents', 'prop-types', './menus.css'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-dom'), require('./Menu'), require('./SubMenus'), require('./HelperComponents'), require('prop-types'), require('./menus.css'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.Menu, global.SubMenus, global.HelperComponents, global.propTypes, global.menus);
    global.Menus = mod.exports;
  }
})(this, function (exports, _react, _reactDom, _Menu, _SubMenus, _HelperComponents, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _SubMenus2 = _interopRequireDefault(_SubMenus);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Menus = function (_React$Component) {
    _inherits(Menus, _React$Component);

    function Menus(props) {
      _classCallCheck(this, Menus);

      var _this = _possibleConstructorReturn(this, (Menus.__proto__ || Object.getPrototypeOf(Menus)).call(this, props));

      _this.state = {
        visible: false
      };

      _this.onDOMClick = _this.onDOMClick.bind(_this);
      _this.onClickedAway = _this.onClickedAway.bind(_this);
      _this.toggleMenus = _this.toggleMenus.bind(_this);
      return _this;
    }

    _createClass(Menus, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.element = _reactDom2.default.findDOMNode(this);
        window.addEventListener('click', this.onDOMClick);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('click', this.onDOMClick);
      }
    }, {
      key: 'onDOMClick',
      value: function onDOMClick(event) {
        if (this.element !== event.target && !this.element.contains(event.target)) {
          this.onClickedAway();
        }
      }
    }, {
      key: 'onClickedAway',
      value: function onClickedAway() {
        this.setState({ visible: false });
      }
    }, {
      key: 'toggleMenus',
      value: function toggleMenus() {
        this.setState({ visible: !this.state.visible });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            list = _props.list,
            children = _props.children,
            style = _props.style,
            label = _props.label,
            triggerComponent = _props.triggerComponent;

        return _react2.default.createElement(
          'div',
          { className: 'Menus-wrapper' },
          _react2.default.createElement(_HelperComponents.WrappedComponent, {
            toggleMenus: this.toggleMenus,
            component: triggerComponent,
            label: label
          }),
          _react2.default.createElement(
            'div',
            { className: '' + (this.state.visible ? 'show' : 'hide') },
            _react2.default.createElement(
              _SubMenus2.default,
              {
                list: list,
                style: style
              },
              children
            )
          )
        );
      }
    }]);

    return Menus;
  }(_react2.default.Component);

  Menus.propTypes = {
    list: _propTypes2.default.bool,
    label: _propTypes2.default.string,
    style: _propTypes2.default.object,
    triggerComponent: _propTypes2.default.func,
    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.arrayOf(_Menu2.default)]).isRequired
  };

  Menus.defaultProps = {
    list: true,
    style: null,
    label: null,
    triggerComponent: _HelperComponents.TriggerComponent
  };

  exports.default = Menus;
});