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

import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ValidationForm, TextInput, TextInputGroup, FileInput, SelectGroup, Checkbox } from "react-bootstrap4-form-validation";

  export default class Index extends Component {
    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);
    this.state = {
      datatableData:[],
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

    axios.get('http://localhost:4000/RivalServices/payments')
    .then(res => {
     
      
        this.setState({ datatableData: res.data });
        // console.log(res.data);

        // console.log(res.data)
    })
    .catch(function (error) {
        console.log(error);
    })
  }


render() {
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
                                       <div className="section-title">
                                           <h2><span className="dot"></span>Payments List</h2>
                                       </div>
                                       <div classname="table-responsive">
                                                <MUIDataTable
                                                  title="Payments List"
                                                  className="table table-border"
                                                  data={this.state.datatableData}
                                                  columns={
                                                    
                                                    [
                                                      {
                                                        label:"Invoice ID",
                                                        name:"billing_details_id"
                                                      },
                                                      {
                                                        label:"Customer First name",
                                                        name:"customer_first_name"
                                                      },
                                                      {
                                                        label:"Customer Last name",
                                                        name:"customer_last_name"
                                                      },
                                                      {
                                                        label:"Customer phone",
                                                        name:"customer_phone"
                                                      },
                                                      {
                                                        label:"Payment method",
                                                        name:"billing_method"
                                                      },
                                                      {
                                                        label:"Payment Amount",
                                                        name:"products_price_total"
                                                      },
                                                      {
                                                        label:"Payment Date",
                                                        name:"created_at"
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
                                             <div>
                                             </div>

                                            </div>
                                    </div>
                          </div>
          </div>
     </div>
    </React.Fragment>
           
    );
  }
}