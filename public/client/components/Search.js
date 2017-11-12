"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      user: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ user: event.target.value });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.props.clickSubmission(this.state.user);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement("input", { type: "search", onChange: function onChange(event) {
            return _this2.handleChange(event);
          } }),
        React.createElement(
          "button",
          { onClick: function onClick() {
              return _this2.handleClick();
            } },
          "Search"
        )
      );
    }
  }]);

  return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjbGlja1N1Ym1pc3Npb24iLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBREssS0FBYjtBQUZpQjtBQUtsQjs7OztpQ0FFWUMsSyxFQUFPO0FBQ2xCLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRixNQUFNQyxNQUFNRSxNQUFOLENBQWFDLEtBQXJCLEVBQWQ7QUFDRDs7O2tDQUVhO0FBQ1osV0FBS04sS0FBTCxDQUFXTyxlQUFYLENBQTJCLEtBQUtOLEtBQUwsQ0FBV0MsSUFBdEM7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSx1Q0FBTyxNQUFLLFFBQVosRUFBcUIsVUFBVSxrQkFBQ0MsS0FBRDtBQUFBLG1CQUFXLE9BQUtLLFlBQUwsQ0FBa0JMLEtBQWxCLENBQVg7QUFBQSxXQUEvQixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsU0FBUztBQUFBLHFCQUFNLE9BQUtNLFdBQUwsRUFBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFNRDs7OztFQXZCa0JDLE1BQU1DLFM7O0FBMEIzQkMsT0FBT2IsTUFBUCxHQUFnQkEsTUFBaEIiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6ICcnLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5jbGlja1N1Ym1pc3Npb24odGhpcy5zdGF0ZS51c2VyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLmhhbmRsZUNoYW5nZShldmVudCl9PjwvaW5wdXQ+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5TZWFyY2g8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDtcbiJdfQ==