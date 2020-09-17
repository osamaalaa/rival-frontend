import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import axios from "axios";
import { Input, Label} from 'reactstrap';

class Index extends Component {

    constructor(props){
        super(props);

        this.state={
            name:'',
            phone:'',
            email:'',
            message:'',
            websitePhone: '',
            websiteEmail: '',
            websiteAddress: '',
            websiteFacebook: '',
            websiteInstgram: '',
            websitePolicies: '',      
        }
    }


    componentDidMount() {
          axios.get('http://localhost:4000/RivalServices/contact-info')
          .then(res => {
              this.setState({
                websitePhone: res.data[0].phone,
                websiteEmail: res.data[0].email,
                websiteAddress: res.data[0].address,
                websiteFacebook: res.data[0].facebook_link,
                websiteInstgram: res.data[0].instgram_link,
                websitePolicies: res.data[0].policies, 
              });
              console.log(res.data);

              console.log(this.state.websitePhone);
          })
          .catch(function (error) {
              console.log(error);
          })   
        
        }

    handlefields = e => this.setState({ [e.target.name] : e.target.value });

    handleform = e => {
        let that =this;
        console.log(this.state);
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Breadcrumb title="Contact Us" />
                <section className="contact-area ptb-60">
                    <div className="container">
                        <div className="section-title">
                            <h2><span className="dot"></span> Contact Us</h2>
                        </div>

                        <div className="row">
                            <div className="col-lg-5 col-md-12">
                                <div className="contact-info">
                                    <h3>Here to Help</h3>
                                    <p>Have a question? You may find an answer in our FAQs. But you can also contact us.</p>

                                    <ul className="contact-list">
                                        <li className="m-3"><i className="fas fa-map-marker-alt"></i>Location: {this.state.websiteAddress}</li>
                                        <li className="m-3"><i className="fas fa-phone"></i> Call Us:   {this.state.websitePhone} </li>
                                        <li className="m-3"><i className="far fa-envelope"></i> Email Us: <a href="mailto:`${this.state.websiteEmail}`">{this.state.websiteEmail}</a></li>
                                    </ul>

                                  
                                    <h3>Follow Us:</h3>
                                    <ul className="social">
                                        <li><a href={this.state.websiteFacebook} target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href={this.state.websiteInstgram} target="_blank"><i className="fab fa-instagram"></i></a></li> 
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="contact-form">
                                    <h3>Drop Us A Line</h3>
                                    <p>We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>

                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Name <span className="required">*</span></label>
                                                    <input type="text" name="name" id="name" className="form-control" required={true} data-error="Please enter your name" placeholder="Enter your name" onChange={this.handlefields} />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Email <span className="required">*</span></label>
                                                    <input type="email" name="email" id="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Enter your Email Address" onChange={this.handlefields}/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Phone Number <span className="required">*</span></label>
                                                    <input type="text" name="phone_number" id="phone_number" className="form-control" required={true} data-error="Please enter your phone number" placeholder="Enter your Phone Number" onChange={this.handlefields} />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <label>Your Message <span className="required">*</span></label>
                                                    <textarea name="message" id="message" cols="30" rows="5" required={true} data-error="Please enter your message" className="form-control" placeholder="Enter your Message" onChange={this.handlefields} />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <input type="submit" value="Send Message" className="btn btn-primary col-lg-12" onSubmit={this.handleform}/>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <input type="button" value="Send Email" className="btn btn-primary col-lg-12" onSubmit={this.handleform}/>
                                            </div>
                                        </div>
                                    </form>
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