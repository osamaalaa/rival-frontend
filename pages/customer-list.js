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
 



  export default class Index extends Component {
    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);

    this.state = {
      content: "",
      userCon: "",
      datatableData:[]
    };
    // console.log(AuthService.getCurrentUser())
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

    axios.get('http://localhost:4000/RivalServices/allusers')
    .then(res => { 
        this.setState({ datatableData: res.data });
        console.log(res.data);

        console.log(this.state.datatableData[0]);
    })
    .catch(function (error) {
        console.log(error);
    })




    // console.log(response.data);
  }

  



render() {

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive: 'vertical',
    enableNestedDataAccess: '.',
    
};
    return (
      <React.Fragment>
        <div className="admin">
      <Navbar />
      <div className="container">
      <div className="row">
      <div id="side" className="col-lg-3 col-md-12">
       <SideAdmin /> 
</div>



<div className="col-lg-9 col-md-12">

  
      <Grid container >
          <Grid item>
            <MUIDataTable
              title="Users"
              data={this.state.datatableData}
              columns={["id", "username", "email"]}
              //options={options}
              
            />
          </Grid>
          
    </Grid>
</div>
 </div>
     </div>
     </div>
    </React.Fragment>
           
    );
  }
}