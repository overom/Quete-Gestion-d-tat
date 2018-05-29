import React, { Component } from "react";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.check = this.check.bind(this);
  }
  check(e) {
    e.preventDefault();
    this.setState({ password: e.target.value });
  }
  render() {
    let errorpassword = "";

    let regexThree = new RegExp(/[-.?!+^]{1,}[a-z]+[A-Z]+/);

    const resulRegexThree = regexThree.test(this.state.password);

    console.log(resulRegexThree);

    if (this.state.password.length >= 6 && resulRegexThree) {
      errorpassword = "mot de passe fort";
    } else if (
      this.state.password.length < 6 &&
      this.state.password.length > 0
    ) {
      errorpassword = "mot de passe faible";
    } else if (this.state.password.length >= 6) {
      errorpassword = "mot de passe moyen";
    } else {
      errorpassword = null;
    }

    return (
      <div className="container-fluid">
        <div className="row justify-content-center ">
          <div className="col-6">
            <form>
              <label htmlFor="pass">Entrez votre mot de passe</label>
              <input
                type="text"
                className="form-control"
                placeholder="Votre mot de passe"
                htmlFor="pass"
                onChange={this.check}
              />
              {errorpassword ? (
                <div className="alert alert-danger">{errorpassword}</div>
              ) : null}
              {errorpassword === "mot de passe moyen" ||
              errorpassword === "mot de passe fort" ? (
                <button type="submit" className="btn btn-primary mt-1">
                  Submit
                </button>
              ) : (
                <button type="submit" className="btn btn-primary mt-1 disabled">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Password;
