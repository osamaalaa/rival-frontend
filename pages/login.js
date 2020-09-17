import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
// import { Redirect } from "react-router-dom";

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
  
class Index extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    
        this.state = {
          email: "",
          password: "",
          loading: false,
          message: ""
        };
      }
    
      onChangeUsername(e) {
        this.setState({
          email: e.target.value
        });
      }
    
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
    
      handleLogin(e) {
        e.preventDefault();
    
        this.setState({
          message: "",
          loading: true
        });
    
        this.form.validateAll();
    
        if (this.checkBtn.context._errors.length === 0) {
          AuthService.login(this.state.email, this.state.password).then(
            () => {
             
              console.log(history);
      
              // window.location.reload();
            
              window.location.href = "/";
              // window.location.reload();
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              this.setState({
                loading: false,
                message: resMessage
              });
            }
          );
        } else {
          this.setState({
            loading: false
          });
        }
      }
    
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Login" />
                <section className="login-area ptb-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="login-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span>Sign In</h2>
                                    </div>

                                    {/* <form className="login-form">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter your name" id="name" name="name" />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">Login</button>
                                        
                                        <Link href="#">
                                            <a className="forgot-password">Lost your password?</a>
                                        </Link>
                                    </form> */}
 

                                                        <Form
                                                                    onSubmit={this.handleLogin}
                                                                    ref={c => {
                                                                    this.form = c;
                                                                    }}
                                                                >
                                                                    <div className="form-group">
                                                                    <label htmlFor="email">Email</label>
                                                                    <Input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        value={this.state.email}
                                                                        onChange={this.onChangeUsername}
                                                                        validations={[required]}
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
                                                                        validations={[required]}
                                                                    />
                                                                    </div>

                                                                    <div className="form-group">
                                                                    <button
                                                                        className="btn btn-primary btn-block"
                                                                        disabled={this.state.loading}
                                                                    >
                                                                        {this.state.loading && (
                                                                        <span className="spinner-border spinner-border-sm"></span>
                                                                        )}
                                                                        <span>Sign In</span>
                                                                    </button>
                                                                    </div>

                                                                    {this.state.message && (
                                                                    <div className="form-group">
                                                                        <div className="alert alert-danger" role="alert">
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
                                                                </Form>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="new-customer-content">
                                    <div className="section-title">
                                        <h2><span className="dot"></span>Register</h2>
                                    </div>

                                    <span>Create an Account</span>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                                    <Link href="/signup">
                                        <a className="btn btn-light">Register</a>
                                    </Link>
                                </div>
                            </div>
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
