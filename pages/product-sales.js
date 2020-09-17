import React, { Component } from "react";
import UserService from "../services/user.service";
import Navbar from '../components/Layout/Navbar';

import MUIDataTable from "mui-datatables";

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

    axios.get('http://localhost:4000/RivalServices/getAllProductSales')
    .then(res => {
        this.setState({ datatableData: res.data });



        console.log("datatable  "+ res.data);


    })
    .catch(function (error) {
        console.log(error);
    })
  }

 

  handleRowClick = (rowData) => {
    


   
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

  
  <div className="table-responsive mt-4">
    <div className="section-title">
        <h2 className="mb-4"><span className="dot"></span>Product Sales</h2>
    </div>
       
  <MUIDataTable
    title="Product Sales" 
    className="table table-border"
    data={this.state.datatableData}
    columns={[
              {
                label: "Product ID",
                name:  "PRODUCT_ID" 
              },
              {
                label: "Product Name",
                name:  "PRODUCT_NAME" 
              }, 
              {
                label: "PRODUCT PRICE",
                name: "PRODUCT_PRICE"
              },
              {
                label: "PRODUCT_QUANTITY",
                name:"PRODUCT_QUANTITY"
              },
              {
                label: "CUSTOMER_NAME",
                name:"CUSTOMER_NAME"
              },
              {
                label: "CUSTOMER_EMAIL",
                name:"CUSTOMER_EMAIL"
              },
              {
                label: "CUSTOMER_PHONE",
                name:"CUSTOMER_PHONE"
              },

              {                                                     
                name: "PRODUCT_IMAGE",
                options: {
                      filter: false,
                      sort: false,
                      empty: true,
                      customBodyRender: (value, tableMeta, updateValue) => {
                        //   console.log(dataIndex);
                        console.log("osama  " + value)
                        return (
                         

                            <img src= {value} alt="Girl in a jacket" width="50" height="60" />
                        );
                      }
                    }
                  },

              {
                label: "CREATED_AT",
                name: "CREATED_AT"
              },
                
                ] 
            
            
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