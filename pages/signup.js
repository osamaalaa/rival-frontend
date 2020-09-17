import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import CheckButton from "react-validation/build/button";
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};




const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vulastName = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The lastName must be between 3 and 20 characters.
      </div>
    );
  }
};

const vuAddress = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid Address.
      </div>
    );
  }
};


const vuCity = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid City.
      </div>
    );
  }
};


const vuCountry = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid Country.
      </div>
    );
  }
};

const vuPhoneNumber = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid PhoneNumber.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Index extends Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          username: "",
          lastName: "",
          Address: "",
          City: "",
          Country: "",
          PhoneNumber: "",
          email: "",
          password: "",
          successful: false,
          message: ""
        };
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        });
      }

      onChangelastName(e) {
        this.setState({
          lastName: e.target.value
        });
      }
      onChangeAddress(e) {
        this.setState({
          Address: e.target.value
        });
      }

      onChangeCity(e) {
        this.setState({
          City: e.target.value
        });
      }
      onChangeCountry(e) {
        this.setState({
          Country: e.target.value
        });
      }

      onChangePhoneNumber(e) {
        this.setState({
          PhoneNumber: e.target.value
        });
      }
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleRegister(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          successful: false
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.register(
            this.state.username,
            this.state.lastName,
            this.state.Address,
            this.state.City,
            this.state.Country,
            this.state.PhoneNumber,
            this.state.email,
            this.state.password
          ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                successful: false,
                message: resMessage
              });
            }
          );
        }
      }
    render() {    
        return (    
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Signup" />
                <section className="signup-area ptb-60">
                    <div className="container">
                        <div className="signup-content">
                            <div className="section-title">
                                <h2><span className="dot"></span> Create an Account</h2>
                            </div>

                        

                                <Form
                                            onSubmit={this.handleRegister}
                                            ref={c => {
                                            this.form = c;
                                            }}
                                        >
                                            {!this.state.successful && (
                                            <div>
                                                <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="username"
                                                    value={this.state.username}
                                                    onChange={this.onChangeUsername}
                                                    validations={[required, vusername]}
                                                />
                                                </div>


                                                <div className="form-group">
                                                <label htmlFor="lastName">lastName</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="lastName"
                                                    value={this.state.lastName}
                                                    onChange={this.onChangelastName}
                                                    validations={[required, vulastName]}
                                                />
                                                </div>

                                                <div className="form-group">
                                                <label htmlFor="Address">Address</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="Address"
                                                    value={this.state.Address}
                                                    onChange={this.onChangeAddress}
                                                    validations={[required, vuAddress]}
                                                />
                                                </div>

                                                <div className="form-group">
                                                <label htmlFor="City">City</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="City"
                                                    value={this.state.City}
                                                    onChange={this.onChangeCity}
                                                    validations={[required, vuCity]}
                                                />
                                                </div>

                                                <div className="form-group">
                                                <label htmlFor="Country">Country</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="Country"
                                                    value={this.state.Country}
                                                    onChange={this.onChangeCountry}
                                                    validations={[required, vuCountry]}
                                                />
                                                </div>


                                                <div className="form-group">
                                                <label htmlFor="PhoneNumber">PhoneNumber</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="PhoneNumber"
                                                    value={this.state.PhoneNumber}
                                                    onChange={this.onChangePhoneNumber}
                                                    validations={[required, vuPhoneNumber]}
                                                />
                                                </div>


                                                <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChangeEmail}
                                                    validations={[required, email]}
                                                />
                                                </div>

                                                <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <Input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    value={this.state.password}
                                                    onChange={this.onChangePassword}
                                                    validations={[required, vpassword]}
                                                />
                                                </div>

                                                <div className="form-group">
                                                <button className="btn btn-primary btn-block">Sign Up</button>
                                                </div>
                                            </div>
                                            )}

                                            {this.state.message && (
                                            <div className="form-group">
                                                <div
                                                className={
                                                    this.state.successful
                                                    ? "alert alert-success"
                                                    : "alert alert-danger"
                                                }
                                                role="alert"
                                                >
                                                {this.state.message}
                                                </div>
                                            </div>
                                            )}
                                            <CheckButton
                                            Style={{ display: "none" }}
                                            ref={c => {
                                                this.checkBtn = c;
                                            }}
                                            />
                                             <Link href="/">
                                                <a className="return-store">Return to Store</a>
                                            </Link>
                                        </Form>


                        </div>
                    </div>
                </section>
                <Facility />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
