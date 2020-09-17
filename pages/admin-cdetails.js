import React, { Component } from "react";
import UserService from "../services/user.service";
import Navbar from '../components/Layout/Navbar';
//import MegaMenu from '../components/Layout/MegaMenu';
import 'react-sidebar-ui/dist/index.css';
import Link from 'next/link';
import axios from 'axios';
import SideAdmin from "../components/Layout/SideAdmin";
import { ValidationForm, TextInput  } from "react-bootstrap4-form-validation";
import { Alert } from 'reactstrap';

import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGridTwoColumn from '../components/blog/BlogGridTwoColumn';
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Widget from "../components/Widget/Widget";
import Table from "../components/Table/Table";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui';

// data
import mock from "./mock";

import {
    Col, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

  export default class Index extends Component {
 /////////////////////////////////////

  toggleDetails = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
}
/////////////////////////////////////
    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);

    this.state = {
        id:"",
        customer_first_name: "",
        customer_last_name: "",
        customer_phone:"",
        customer_email: "",
        customer_email2: "",
        customer_Address: "",
        customer_city: "",
        status:"", 
        hidden:true,
        datatableData:[]
      };
      // console.log(AuthService.getCurrentUser())
    }
  
    

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    onSearch = e => {
      let email = this.state.customer_email;
      axios.get('http://localhost:4000/RivalServices/searchbyemail/'+email)
      .then(res => {
          this.setState({ 
            datatableData: res.data,
            customer_first_name: res.data[0].customer_first_name,
            customer_last_name: res.data[0].customer_last_name,
            customer_phone: res.data[0].customer_phone,
            customer_email2: res.data[0].customer_email,
            customer_Address: res.data[0].customer_Address ,
            customer_city: res.data[0].customer_city, 
          });
          // console.log(this.state.datatableData)
          console.log(res.data);
      })
      .catch(function (error) {
          console.log(error);
      })   
      // console.log(response.data);
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
        filterType: 'dropdown',
        responsive: 'vertical',
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
                        <div className="section-title mb-4">
                        
                            <h2 className="dot mt-4"><span className="dot"></span>Customer's Details</h2>
                        </div>
<div className="mb-5">
  <Form className="row">                                          
    <FormGroup className="col-lg-6 col-sm-12 row">
      <Label for="examplePassword" sm={4}>
        Search by E-MAIL:
      </Label>
      <Col sm={8}>
          <Input type="text" name="customer_email" className="form-control" 
          value={this.state.customer_email} onChange={this.handleFields} required={true} />
          <div className="help-block with-errors"></div>
      </Col>
    </FormGroup>

    <FormGroup check className="col-lg-6  col-sm-12 row">
      <Button  className="col-lg-4 btn btn-primary btn-block" 
        onClick={this.onSearch}>Search</Button> 
    </FormGroup>
  </Form>
</div>


<Form className="row">
                                            
<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>First name </Label>
<Col sm={8}>
  <Input type="text" name="customer_first_name" className="form-control" 
  value={this.state.customer_first_name} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Last name </Label>
<Col sm={8}>
  <Input type="text" name="customer_last_name" className="form-control"  
  value={this.state.customer_last_name} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>


<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Phone </Label>
<Col sm={8}>
  <Input type="text" name="customer_phone" className="form-control" 
  value={this.state.customer_phone} required={true} disabled={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label sm={4}>E-mail </Label>
<Col sm={8}>
  <Input type="text" name="customer_email" className="form-control" 
  value={this.state.customer_email2} required={true} disabled={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Address </Label>
<Col sm={8}>
  <Input type="text" name="customer_Address" className="form-control" 
  value={this.state.customer_Address} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>city </Label>
<Col sm={8}>
  <Input type="text" name="customer_city" className="form-control"  
  value={this.state.customer_city} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

</Form>

</div>




<div className="table-responsive mt-4">
       
            <MUIDataTable
              title="Customer's Invoices List"
              data={this.state.datatableData}
              columns={[
                {
                  label: "Billing ID",
                  name:  "billing_details_id" 
                },
                {
                  label: "Billing Date",
                  name: "created_at"
                },
                {
                  label: "Products Details",
                  name:"products_details"
                },
                {
                  label: "Billing Method",
                  name: "billing_method"
                },
                {
                  label: "Invoice Total",
                  name: "products_price_total"
                },
                {
                  label: "Status",
                  name: "STATUS_NAME"
                }
      ]}
             
              options={options}
              className="table table-border"
            />
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