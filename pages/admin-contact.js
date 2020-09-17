import React, { Component } from "react";
import UserService from "../services/user.service";
import Navbar from '../components/Layout/Navbar';
import 'react-sidebar-ui/dist/index.css';
import axios from 'axios';
import SideAdmin from "../components/Layout/SideAdmin";
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';




  export default class Index extends Component {
    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);

    this.state = {
        phone:"",
        email: "",
        address: "",
        facebook_link:"",
        instgram_link:"",
        policies:"",
      };
    }
  


      componentDidMount() {
        UserService.getAdminBoard().then(
      
            response => {
              this.setState({
                content: response.data,
              
               
              });
            },
            error => {
              this.setState({
                content:
                  (error.response &&
                    error.response.data && 
                    error.response.data.message) ||
                  error.message ||
                  error.toString()
              });
            }
      
          );
      
          axios.get('http://localhost:4000/RivalServices/contact-info')
          .then(res => {
              this.setState({
                phone: res.data[0].phone,
                email: res.data[0].email,
                address: res.data[0].address,
                facebook_link: res.data[0].facebook_link,
                instgram_link: res.data[0].instgram_link,
                policies: res.data[0].policies, 
              });
              console.log(res.data);  
          })
          .catch(function (error) {
              console.log(error);
          })   
        
        }

   
    handleFields = e => this.setState({ [e.target.name]: e.target.value });


    onContactInfoUpdated = e => {
      e.preventDefault();
      axios.post('http://localhost:4000/RivalServices/update-contact-info',this.state).then(res =>{
        console.log(res.data);
        // this.setState({ })
      }).catch(error => {
        console.log(error);
      });

    }




render() {
  console.log(this.state);
  //////////////////////
  const { collapsed , showAdminBoard } = this.state;
  const classOne = collapsed ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';
  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
  /////////////////

    const options = {
      filter: true, 
      responsive: "stacked",
      selectableRows: true,
      sort: true,
      enableNestedDataAccess: '.',
      onColumnSortChange: (changedColumn, direction) => console.log('changedColumn: ', changedColumn, 'direction: ', direction),
      onChangeRowsPerPage: numberOfRows => console.log('numberOfRows: ', numberOfRows),
      onChangePage: currentPage => console.log('currentPage: ', currentPage),
      onRowClick: this.handleRowClick,
      rowsSelected: ""

    
    };  
    return (
      <React.Fragment>    
        <div className="admin"> 
      <Navbar />
      <div className="container">
        <div className="row">
        <div id="side" className="col-lg-2 col-md-12">  
       <SideAdmin />      
        </div>

        <div className="col-lg-10 col-md-12">
        <section className="contact-area">         

{/* ///////////////////////////////  Edit ORDER FORM ////////////////////////////////////////// */}
                        <div className="contact-form">
                        <div className="section-title  mb-4">
                            <h2 className="dot mt-4"><span className="dot"></span>Contact Info, Promo Codes & Policies</h2>
                        </div>
                        

<Form className="row">
                                            
<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Phone </Label>
<Col sm={8}>
  <Input type="text" name="phone" className="form-control" onChange={this.handleFields} 
  value={this.state.phone} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label sm={4}>E-mail </Label>
<Col sm={8}>
  <Input type="text" name="email" className="form-control" onChange={this.handleFields} 
  value={this.state.email} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row mt-3">
<Label for="examplePassword" sm={4}>Promo Code</Label>
<Col sm={8}>
  <Input type="text" name="promo_code" className="form-control" onChange={this.handleFields} 
  value={this.state.promo_code} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row mt-3">
<Label for="examplePassword" sm={4}>Discount Percentage</Label>
<Col sm={8}>
  <Input type="number" name="discount" className="form-control" onChange={this.handleFields} 
  value={this.state.discount} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup> 


<FormGroup className="col-lg-6 col-sm-12 row mt-3">
<Label for="examplePassword" sm={4}>Address </Label>
<Col sm={8}>
  <Input type="text" name="address" className="form-control" onChange={this.handleFields} 
  value={this.state.address} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row mt-3">
<Label for="examplePassword" sm={4}>Facebook</Label>
<Col sm={8}>
  <Input type="text" name="facebook_link" className="form-control" onChange={this.handleFields} 
  value={this.state.facebook_link} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row mt-3">
<Label for="examplePassword" sm={4}>Instgram</Label>
<Col sm={8}>
  <Input type="text" name="instgram_link" className="form-control" onChange={this.handleFields} 
  value={this.state.instgram_link} required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup> 


<FormGroup className="col-lg-12 col-sm-12 row mt-3">
    <Label for="exampleText" sm={2}>Policies</Label>
    <Col sm={8}>
    <Input type="textarea" name="policies" onChange={this.handleFields} 
    value={this.state.policies} required={true} rows={30}/>
    </Col>
</FormGroup>

   
<div className="col-lg-12 row  mt-3 clear">
        <FormGroup check className="col-lg-6 col-sm-12 row">
            <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
            onClick={this.onContactInfoUpdated}>Update</Button>  
        </FormGroup>            
</div>
</Form>

</div>

</section>
       </div>
 </div>

     </div>
  </div>
    </React.Fragment>
           
    );
  }
}