import React, { Component } from "react";
import UserService from "../services/user.service";
import Navbar from '../components/Layout/Navbar';
//import MegaMenu from '../components/Layout/MegaMenu';
import MegaMenu from '../components/Layout/SideAdmin';
import Footer from '../components/Layout/Footer';
import Facility from '../components/Common/Facility';
import Breadcrumb from '../components/Common/Breadcrumb';
import BlogGridTwoColumn from '../components/blog/BlogGridTwoColumn';
import AuthService from "../services/auth.service";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Widget from "../components/Widget";
import Table from "../components/Table/Table";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import Link from 'next/link';
import axios from 'axios';
// data
import mock from "./mock";
import SideAdmin from "../components/Layout/SideAdmin";
// import ModalAdmin from "../components/Layout/ModalAdmin";

import { Button, Form, FormGroup, Label } from 'reactstrap';
import { ValidationForm, TextInput, TextInputGroup, FileInput, SelectGroup, Checkbox } from "react-bootstrap4-form-validation";

  export default class Index extends Component {
    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);
    this.state = {
      datatableData:[],
      modal2: false,
      // show: false
        modal: false,
        fade: false,
        immediate:true,
        setFocusOnError:true,
        clearInputOnReset:false,
        billing_details_id:"",
        status:"1",
        hidden:true,
        disabledUpdateButton: true
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

    axios.get('http://localhost:4000/RivalServices/allinvoices')
    .then(res => {
        this.setState({ datatableData: res.data });
    })
    .catch(function (error) {
        console.log(error);
    })
  }

 

  handleRowClick = (rowData) => {
    let statusName = "";
    this.setState({
      modal: true,
      billing_details_id: rowData[0],
      status: rowData[10],
      hidden: false
    });

    
    console.log("ID: "+ rowData[0] +" "+ "Status NAME: "+ rowData[10]);
};

onStatusUpdated = e => {
  // e.preventDefault();
  
    axios.post('http://localhost:4000/RivalServices/updateStatus', this.state, {
            headers: { Accept: "application/json" }
        })
        .then(function(response) {
            console.log(response);
            document.getElementById("contactForm").reset();
           
            that.setState({
                // [e.target.name]: e.target.value,
                hidden:true,
                successMsg: "Products inserted sucessfully"
                
            });
          
            document.getElementById("contactForm").reset();
        })
        .catch(function(error) {});
};

handleFields = e => {
  this.setState({ [e.target.name]: e.target.value, disabledUpdateButton:false }) ;
  console.log(e.target.value);
}


render() {
  console.log(this.state);
  // const toggle = () => this.state.setModal = true;
  const options = {
    filter: true,
    filterType: 'dropdown',
    rowsPerPage: 5,
    rowsPerPageOptions: [5,5],
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
        <div className="admin Admin-o">
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
                        
<Form className="row m-4">
                                            

{(this.state.hidden === false)?
<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4} className="mr-2">Order Status</Label>

  <select name="status" className="form-control" style={{width:"300px"}}  onChange={this.handleFields}> 
     <option key="0">Choose the Order Status</option>
     <option key="1" value="1">Pending</option>
     <option key="2" value="2">In Transit</option>
     <option key="3" value="3">Delivered</option>
  </select>
  
   <div className="help-block with-errors"></div>

 </FormGroup> : ""}

 {(this.state.hidden === false && this.state.disabledUpdateButton === true)?     
        <FormGroup check className="col-lg-6 col-sm-12 row">
         
             <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
              style={{backgroundColor:"gray"}} onClick={this.onStatusUpdated} disabled={true}>Update</Button>
         
         </FormGroup> 
     
        : ""}
        
  {(this.state.hidden === false && this.state.disabledUpdateButton === false)?  
        <FormGroup check className="col-lg-6 col-sm-12 row">
         
          <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
            onClick={this.onStatusUpdated}>Update</Button>
    
        </FormGroup>: "" }
        
  </Form> 
  </div>

  
  <div className="table-responsive mt-4">
    <div className="section-title">
        <h2 className="mb-4"><span className="dot"></span>Invoices & Shipping List</h2>
    </div>
       
  <MUIDataTable
    title="Invoices & Shipping Status" 
    className="table table-border"
    data={this.state.datatableData}
    columns={[
              {
                label: "Billing ID",
                name:  "billing_details_id" 
              },
              {
                label: "First Name",
                name:  "customer_first_name" 
              }, 
              {
                label: "Last Name",
                name: "customer_last_name"
              },
              {
                label: "Phone",
                name:"customer_phone"
              },
              {
                label: "E-MAIL",
                name:"customer_email"
              },
              {
                label: "Address",
                name:"customer_Address"
              },
              {
                label: "City",
                name:"customer_city"
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
              },
              {                                                     
                name: "Delete",
                options: {
                      filter: false,
                      sort: false,
                      empty: true,
                      customBodyRenderLite: (dataIndex) => {
                        return (
                          <button
                          className="trash"
                          onClick={() => {
                            const { data } = this.state;
                              console.log("delete " + deleted);
                            // data.shift();
                            // this.setState({ data });
                          }}>
                            <Icon><i className="fas fa-trash"/></Icon>
                          </button>
                        );
                      }
                    }
                  } ] 
            
            
            }
            options={options}
            
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