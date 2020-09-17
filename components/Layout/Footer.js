import React, { Component } from 'react';
import Link from "next/link";
import axios from "axios";

class Footer extends Component {

    constructor(props){
        super(props);

        this.state={
            websitePhone: '',
            websiteEmail: '',
            websiteAddress: '', 
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/RivalServices/contact-info')
        .then(res => {
            this.setState({
              websitePhone: res.data[0].phone,
              websiteEmail: res.data[0].email,
              websiteAddress: res.data[0].address,
            });
            console.log(res.data);

            console.log(this.state.websitePhone);
        })
        .catch(function (error) {
            console.log(error);
        })   
      
      }
    
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src={require("../../images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>

                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p> */}
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Faq's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Information</h3>

                                <ul className="information-links">
                                    {/* <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/sizing-guide">
                                            <a>Sizing Guide</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>
                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i> 
                                        Location: {this.state.websiteAddress}
                                    </li>
                                    <li>
                                        <i className="fas fa-phone"></i> 
                                        Call Us: {this.state.websitePhone}
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i> 
                                        Email Us: <a href="mailto:`${this.state.websiteEmail}`">{this.state.websiteEmail}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @ 2020 IT LAND. All Rights Reserved By <a href="https://itlandgroup.com/" target="_blank">itlandgroup.com</a></p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/visa.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/mastercard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/mastercard2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/visa2.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/expresscard.png")} alt="image" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
