(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Menus', './Menu', './SubMenus'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Menus'), require('./Menu'), require('./SubMenus'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Menus, global.Menu, global.SubMenus);
    global.index = mod.exports;
  }
})(this, function (exports, _Menus, _Menu, _SubMenus) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SubMenus = exports.Menu = exports.Menus = undefined;

  var _Menus2 = _interopRequireDefault(_Menus);

  var _Menu2 = _interopRequireDefault(_Menu);

  var _SubMenus2 = _interopRequireDefault(_SubMenus);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Menus = _Menus2.default;
  exports.Menu = _Menu2.default;
  exports.SubMenus = _SubMenus2.default;
});