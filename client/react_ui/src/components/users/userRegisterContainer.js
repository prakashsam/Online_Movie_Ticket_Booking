import React from "react";
import { connect } from "react-redux";
import { registerUsers } from "../../redux";

class UserRegisterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      fristname: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      ...user,
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.state;
    this.props.registerUsers(this.state);
    this.setState({ username: "", fristname: "", email: "", password: "" });
  }

  render() {
    const { username, fristname, email, password } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={"form-group" + (!username ? " has-error" : "")}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            {!username && (
              <div className="help-block">First Name is required</div>
            )}
          </div>
          <div className={"form-group" + (!fristname ? " has-error" : "")}>
            <label htmlFor="fristname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="fristname"
              value={fristname}
              onChange={this.handleChange}
            />
            {!fristname && (
              <div className="help-block">Last Name is required</div>
            )}
          </div>
          <div className={"form-group" + (!email ? " has-error" : "")}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {!email && <div className="help-block">email is required</div>}
          </div>
          <div className={"form-group" + (!password ? " has-error" : "")}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            {!password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUsers: (values) => dispatch(registerUsers(values)),
  };
};

const RegisterForm = connect(null, mapDispatchToProps)(UserRegisterContainer);

export default RegisterForm;
