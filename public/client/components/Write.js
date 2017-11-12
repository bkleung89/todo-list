'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Write = function (_React$Component) {
  _inherits(Write, _React$Component);

  function Write(props) {
    _classCallCheck(this, Write);

    var _this = _possibleConstructorReturn(this, (Write.__proto__ || Object.getPrototypeOf(Write)).call(this, props));

    _this.state = {
      user: '',
      body: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  /* i consulted https://www.peterbe.com/plog/onchange-in-reactjs to handle text changes*/

  _createClass(Write, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ user: event.target.value });
    }
  }, {
    key: 'handleChangeBody',
    value: function handleChangeBody(event) {
      this.setState({ body: event.target.value });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.props.clickSubmission(this.state.user, this.state.body);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'text', onChange: function onChange(event) {
            return _this2.handleChange(event);
          } }),
        React.createElement(
          'textarea',
          { name: 'textarea', rows: '10', cols: '50', onChange: function onChange(event) {
              return _this2.handleChangeBody(event);
            } },
          this.state.body
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              return _this2.handleClick();
            } },
          'Save'
        )
      );
    }
  }]);

  return Write;
}(React.Component);

window.Write = Write;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL1dyaXRlLmpzeCJdLCJuYW1lcyI6WyJXcml0ZSIsInByb3BzIiwic3RhdGUiLCJ1c2VyIiwiYm9keSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVDbGljayIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsaWNrU3VibWlzc2lvbiIsImhhbmRsZUNoYW5nZUJvZHkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQURLO0FBRVhDLFlBQU07QUFGSyxLQUFiO0FBSUEsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFQaUI7QUFRbEI7O0FBRUQ7Ozs7aUNBRWFFLEssRUFBTztBQUNsQixXQUFLQyxRQUFMLENBQWMsRUFBRU4sTUFBTUssTUFBTUUsTUFBTixDQUFhQyxLQUFyQixFQUFkO0FBQ0Q7OztxQ0FDZ0JILEssRUFBTztBQUN0QixXQUFLQyxRQUFMLENBQWMsRUFBRUwsTUFBTUksTUFBTUUsTUFBTixDQUFhQyxLQUFyQixFQUFkO0FBQ0Q7OztrQ0FDYTtBQUNaLFdBQUtWLEtBQUwsQ0FBV1csZUFBWCxDQUEyQixLQUFLVixLQUFMLENBQVdDLElBQXRDLEVBQTRDLEtBQUtELEtBQUwsQ0FBV0UsSUFBdkQ7QUFDRDs7OzZCQUNRO0FBQUE7O0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxrQkFBQ0ksS0FBRDtBQUFBLG1CQUFXLE9BQUtILFlBQUwsQ0FBa0JHLEtBQWxCLENBQVg7QUFBQSxXQUE3QixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQVUsTUFBSyxVQUFmLEVBQTBCLE1BQUssSUFBL0IsRUFBb0MsTUFBSyxJQUF6QyxFQUE4QyxVQUFVLGtCQUFDQSxLQUFEO0FBQUEscUJBQVcsT0FBS0ssZ0JBQUwsQ0FBc0JMLEtBQXRCLENBQVg7QUFBQSxhQUF4RDtBQUFrRyxlQUFLTixLQUFMLENBQVdFO0FBQTdHLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBUSxTQUFTO0FBQUEscUJBQU0sT0FBS0csV0FBTCxFQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBSEYsT0FERjtBQU9EOzs7O0VBOUJpQk8sTUFBTUMsUzs7QUFpQzFCQyxPQUFPaEIsS0FBUCxHQUFlQSxLQUFmIiwiZmlsZSI6IldyaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV3JpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogJycsXG4gICAgICBib2R5OiAnJyxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyogaSBjb25zdWx0ZWQgaHR0cHM6Ly93d3cucGV0ZXJiZS5jb20vcGxvZy9vbmNoYW5nZS1pbi1yZWFjdGpzIHRvIGhhbmRsZSB0ZXh0IGNoYW5nZXMqL1xuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlQm9keShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBib2R5OiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5jbGlja1N1Ym1pc3Npb24odGhpcy5zdGF0ZS51c2VyLCB0aGlzLnN0YXRlLmJvZHkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpfT48L2lucHV0PlxuICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInRleHRhcmVhXCIgcm93cz1cIjEwXCIgY29scz1cIjUwXCIgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2VCb2R5KGV2ZW50KX0+e3RoaXMuc3RhdGUuYm9keX08L3RleHRhcmVhPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+U2F2ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuV3JpdGUgPSBXcml0ZTtcbiJdfQ==