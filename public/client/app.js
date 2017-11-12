'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'searchSubmission',
    value: function searchSubmission(user) {
      axios({
        method: 'get',
        url: '/user',
        params: {
          user: user
        }
      }).then(function (response) {
        console.log('hi search ', response.data);
      }).catch(function (err) {
        console.log('hi error', err);
      });
    }
  }, {
    key: 'writeSubmission',
    value: function writeSubmission(user, body) {
      axios({
        method: 'post',
        url: '/',
        data: {
          user: user,
          body: body
        }
      }).then(function (response) {
        console.log('hi, ', response.data);
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Search, { clickSubmission: this.searchSubmission }),
        React.createElement(Write, { clickSubmission: this.writeSubmission })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJ1c2VyIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJwYXJhbXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiYm9keSIsImVycm9yIiwic2VhcmNoU3VibWlzc2lvbiIsIndyaXRlU3VibWlzc2lvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFJbEI7Ozs7cUNBRWdCQyxJLEVBQU07QUFDckJDLFlBQU07QUFDSkMsZ0JBQVEsS0FESjtBQUVKQyxhQUFLLE9BRkQ7QUFHSkMsZ0JBQVE7QUFDTkosZ0JBQU1BO0FBREE7QUFISixPQUFOLEVBT0dLLElBUEgsQ0FPUSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCQyxnQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJGLFNBQVNHLElBQW5DO0FBQ0QsT0FUSCxFQVVHQyxLQVZILENBVVMsVUFBU0MsR0FBVCxFQUFjO0FBQ25CSixnQkFBUUMsR0FBUixDQUFZLFVBQVosRUFBd0JHLEdBQXhCO0FBQ0QsT0FaSDtBQWNEOzs7b0NBQ2VYLEksRUFBTVksSSxFQUFNO0FBQzFCWCxZQUFNO0FBQ0pDLGdCQUFRLE1BREo7QUFFSkMsYUFBSyxHQUZEO0FBR0pNLGNBQU07QUFDSlQsZ0JBQU1BLElBREY7QUFFSlksZ0JBQU1BO0FBRkY7QUFIRixPQUFOLEVBUUdQLElBUkgsQ0FRUSxVQUFTQyxRQUFULEVBQW1CO0FBQ3ZCQyxnQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JGLFNBQVNHLElBQTdCO0FBQ0QsT0FWSCxFQVdHQyxLQVhILENBV1MsVUFBU0MsR0FBVCxFQUFjO0FBQ25CSixnQkFBUU0sS0FBUixDQUFjRixHQUFkO0FBQ0QsT0FiSDtBQWNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxpQkFBaUIsS0FBS0csZ0JBQTlCLEdBREY7QUFFRSw0QkFBQyxLQUFELElBQU8saUJBQWlCLEtBQUtDLGVBQTdCO0FBRkYsT0FERjtBQU1EOzs7O0VBL0NlQyxNQUFNQyxTOztBQWtEeEJDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgIH07XG4gIH1cblxuICBzZWFyY2hTdWJtaXNzaW9uKHVzZXIpIHtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgdXJsOiAnL3VzZXInLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHVzZXI6IHVzZXJcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hpIHNlYXJjaCAnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaSBlcnJvcicsIGVycilcbiAgICAgIH0pO1xuXG4gIH1cbiAgd3JpdGVTdWJtaXNzaW9uKHVzZXIsIGJvZHkpIHtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogJy8nLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VyOiB1c2VyLFxuICAgICAgICBib2R5OiBib2R5XG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdoaSwgJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlYXJjaCBjbGlja1N1Ym1pc3Npb249e3RoaXMuc2VhcmNoU3VibWlzc2lvbn0gLz5cbiAgICAgICAgPFdyaXRlIGNsaWNrU3VibWlzc2lvbj17dGhpcy53cml0ZVN1Ym1pc3Npb259IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcbiJdfQ==