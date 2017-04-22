"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require("react");

var withAwareness = function withAwareness(fn) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

      _this.state = {
        beingLookedAt: false
      };
      _this.handleEnter = _this.handleEnter.bind(_this);
      _this.handleExit = _this.handleExit.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: "handleEnter",
      value: function handleEnter() {
        this.setState({ beingLookedAt: true });
      }
    }, {
      key: "handleExit",
      value: function handleExit() {
        this.setState({ beingLookedAt: false });
      }
    }, {
      key: "render",
      value: function render() {
        var beingLookedAt = this.state.beingLookedAt;

        return React.cloneElement(fn({
          beingLookedAt: beingLookedAt
        }), {
          onEnter: this.handleEnter,
          onExit: this.handleExit
        });
      }
    }]);

    return _class;
  }(React.Component);
};

module.exports = withAwareness;