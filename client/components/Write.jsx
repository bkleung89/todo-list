class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /* i consulted https://www.peterbe.com/plog/onchange-in-reactjs to handle text changes*/

  handleChange(event) {
    this.setState({ user: event.target.value });
  }
  handleChangeBody(event) {
    this.setState({ body: event.target.value });
  }
  handleClick() {
    this.props.clickSubmission(this.state.user, this.state.body);
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(event) => this.handleChange(event)}></input>
        <textarea name="textarea" rows="10" cols="50" onChange={(event) => this.handleChangeBody(event)}>{this.state.body}</textarea>
        <button onClick={() => this.handleClick()}>Save</button>
      </div>
    );
  }
}

window.Write = Write;
