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

    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);


    this.state = {
        billing_details_id:"",
        customer_first_name: "",
        customer_last_name: "",
        customer_phone:"",
        customer_email: "",
        customer_Address: "",
        customer_city: "", 
        customer_notes:"",
        hidden:true,
        datatableData:[]
      };
      // console.log(AuthService.getCurrentUser())

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
    }
  

      componentDidMount() {
        console.log('window.innerHeight', window.innerHeight);
        console.log(this.state.datatableData)
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
      
          axios.get('http://localhost:4000/RivalServices/allorders')
          .then(res => {
              this.setState({ datatableData: res.data });
              console.log(this.state.datatableData)
              console.log(res.data);
          })
          .catch(function (error) {
              console.log(error);
          })   
          // console.log(response.data);
        }

  
render() {
  console.log(this.state);
  
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
        <div className="section-title mb-4">            
            <h2 className="dot mt-4"><span className="dot"></span>All Customers List</h2>
        </div>     

<div className="table-responsive mt-4">
       
            <MUIDataTable
              title="All Customers List"
              data={this.state.datatableData}
              columns={[   
                {
                  label: "ID",
                  name:  "CUSTOMER_ID" 
                },
                {
                  label: "First Name",
                  name:  "username" 
                }, 
                {
                  label: "Last Name",
                  name: "lastName"
                },
                {
                  label: "E-MAIL",
                  name:"email"
                },
                {
                  label: "City",
                  name:"city"
                },
                {
                  label: "Number Of Invoices",
                  name:"number_of_bills"
                },
                {
                  label: "Total Purchases",
                  name:"Total"
                }
      ]}
             
              options={this.options}
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