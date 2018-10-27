import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/loginActions";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      buttonLabel: "Login"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    //Call Action here
    this.setState({ buttonLabel: "Logging in" });
    setTimeout(() => {
      this.props.login(user);
    }, 500);
    this.setState({ buttonLabel: "Logged In" });
  }

  render() {
    return (
      <div className="form-group">
        <form action="POST" onSubmit={this.onSubmit}>
          <div className="form-group">
            <h2>Welcome .. please login</h2>
            <label htmlFor="post">Username: </label>
            <input
              className="form-control"
              name="username"
              type="text"
              onChange={this.onChange}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button className="btn btn-light" type="submit">
            {this.state.buttonLabel}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginComponent);
