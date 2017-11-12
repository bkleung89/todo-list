class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  handleClick() {
    this.props.clickSubmission(this.state.user);
  }

  render() {
    return (
      <div>
        <input type="search" onChange={(event) => this.handleChange(event)}></input>
        <button onClick={() => this.handleClick()}>Search</button>
      </div>
    );
  }
}

window.Search = Search;
