class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  searchSubmission(user) {
    axios({
      method: 'get',
      url: '/user',
      params: {
        user: user
      }
    })
      .then(function(response) {
        console.log('hi search ', response.data);
        /* response.data is an array of objects, with properties .author, .body... */
      })
      .catch(function(err) {
        console.log('hi error', err)
      });

  }
  writeSubmission(user, body) {
    axios({
      method: 'post',
      url: '/',
      data: {
        user: user,
        body: body
      }
    })
      .then(function(response) {
        console.log('hi, ', response.data);
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <Search clickSubmission={this.searchSubmission} />
        <Write clickSubmission={this.writeSubmission} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
