"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

////// Default setting //////
var defaultName = 'name';
var defaultVerbs = ['CREATE', 'PATCH', 'REMOVE', 'GET', 'FIND'];
var defaultEvents = ['START', 'SUCCESS', 'FAILED'];
var defaultExtras = ['LOADING', 'CURRENT', 'THEME', 'DISABLE', 'HIDE']; /////// Function ///////

var actionGen = function actionGen() {
  var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var actions = {};
  Object.keys(types).forEach(function (key) {
    var keyLowercase = key.toLowerCase();
    actions = _objectSpread(_objectSpread({}, actions), {}, _defineProperty({}, keyLowercase, function (data, route) {
      var _ref;

      return _ref = {}, _defineProperty(_ref, "type", types[key]), _defineProperty(_ref, "payload", data), _defineProperty(_ref, "route", route), _ref;
    }));
  });
  return actions;
}; ////// Function: Type genrator //////


var typeGen = function typeGen(_ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? '' : _ref2$name,
      _ref2$verbs = _ref2.verbs,
      verbs = _ref2$verbs === void 0 ? [] : _ref2$verbs,
      _ref2$events = _ref2.events,
      events = _ref2$events === void 0 ? [] : _ref2$events,
      _ref2$extras = _ref2.extras,
      extras = _ref2$extras === void 0 ? [] : _ref2$extras;
  // Create main [verb_name]: 'verb_name_events'
  var mainSet = {};
  verbs.forEach(function (v) {
    events.forEach(function (e) {
      mainSet = _objectSpread(_objectSpread({}, mainSet), {}, _defineProperty({}, "".concat(v, "_").concat(e), "".concat(v, "_").concat(name, "_").concat(e)));
    });
  }); // Create extra [extras]: 'name_extras'

  var extraSet = {};
  extras.forEach(function (ex) {
    extraSet = _objectSpread(_objectSpread({}, extraSet), {}, _defineProperty({}, "".concat(ex), "".concat(name, "_").concat(ex)));
  }); // Return all

  return _objectSpread(_objectSpread({}, mainSet), extraSet);
}; ///// Utils: Uppercase in arrays /////


var arrUpperCase = function arrUpperCase() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  arr = arr.map(function (x) {
    return x.toUpperCase();
  });
  return arr;
}; ////// Default function //////


var genReduxType = function genReduxType() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? defaultName : _ref3$name,
      verbs = _ref3.verbs,
      events = _ref3.events,
      extras = _ref3.extras,
      _ref3$addDefaultVerbs = _ref3.addDefaultVerbs,
      addDefaultVerbs = _ref3$addDefaultVerbs === void 0 ? false : _ref3$addDefaultVerbs,
      _ref3$addDefaultEvent = _ref3.addDefaultEvents,
      addDefaultEvents = _ref3$addDefaultEvent === void 0 ? false : _ref3$addDefaultEvent,
      _ref3$addDefaultExtra = _ref3.addDefaultExtras,
      addDefaultExtras = _ref3$addDefaultExtra === void 0 ? false : _ref3$addDefaultExtra,
      setDefaultVerbs = _ref3.setDefaultVerbs,
      setDefaultEvents = _ref3.setDefaultEvents,
      setDefaultExtras = _ref3.setDefaultExtras;

  // Check setDefault from outside
  var dVerbs = !setDefaultVerbs ? defaultVerbs : setDefaultVerbs;
  var dEvents = !setDefaultEvents ? defaultEvents : setDefaultEvents;
  var dExtras = !setDefaultExtras ? defaultExtras : setDefaultExtras; // Check blank as default, Check addDefault or not when not blank

  verbs = !verbs ? dVerbs : addDefaultVerbs == true ? [].concat(_toConsumableArray(dVerbs), _toConsumableArray(verbs)) : verbs;
  events = !events ? dEvents : addDefaultEvents == true ? [].concat(_toConsumableArray(dEvents), _toConsumableArray(events)) : events;
  extras = !extras ? dExtras : addDefaultExtras == true ? [].concat(_toConsumableArray(dExtras), _toConsumableArray(extras)) : extras; // All uppercase

  var newName = name.toUpperCase();
  var newVerbs = arrUpperCase(verbs);
  var newEvents = arrUpperCase(events);
  var newExtras = arrUpperCase(extras); // Execute types and actions

  var types = typeGen({
    name: newName,
    verbs: newVerbs,
    events: newEvents,
    extras: newExtras
  });
  var actions = actionGen(types);
  return [types, actions];
};

var _default = genReduxType;
exports["default"] = _default;