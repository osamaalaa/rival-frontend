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
import Widget from "../components/Widget/Widget";
import Table from "../components/Table/Table";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import Link from 'next/link';
import axios from 'axios';
// data
import mock from "./mock";
import SideAdmin from "../components/Layout/SideAdmin";
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';




  export default class Index extends Component {
    componentDidMount2() {

      window.scrollTo(0, 0);};

  constructor(props) {
    super(props);

    this.state = {
        content: "",
        userCon: "",
        username: "",
        lastName: "",
        PhoneNumber:"",
        email: "",
        Address: "",
        City: "", 
        roleId:"", 
        roles: [],
        disabledUpdateButton: true,
        disabledForm: true,
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
      
          axios.get('http://localhost:4000/RivalServices/all-users')
          .then(res => {
              this.setState({ datatableData: res.data });
              console.log(res.data);

               console.log(this.state.datatableData);
          })
          .catch(function (error) {
              console.log(error);
          })   

          

          axios.get('http://localhost:4000/RivalServices/allroles')
          .then(res => {
              this.setState({ roles: res.data });
              console.log(res.data);

               console.log(this.state.roles);
          })
          .catch(function (error) {
              console.log(error);
          })   
        
        }

        handleRowClick = (rowData) => {
          this.setState({
            modal: true,
            id:rowData[0],
            username:rowData[1],
            lastName:rowData[2],
            PhoneNumber:rowData[3],
            email: rowData[4],
            Address:rowData[5],
            City: rowData[6], 
            roleId:rowData[7],
            disabledForm: false     
          });
        console.log(rowData[0] + " "+ rowData[1] + " "+ rowData[2]+ " "+ rowData[3] + " "+ rowData[4]+ " "+ rowData[5] + " "+ rowData[6] + " "+ rowData[7]);
    };
    
    

    handleFields = e => this.setState({ [e.target.name]: e.target.value });

    handleUserType = e => this.setState({ [e.target.name]: e.target.value, disabledUpdateButton:false });


    onCustomerUpdated = e => {
      // e.preventDefault();
      axios.put('http://localhost:4000/RivalServices/update-user',this.state).then(res =>{
        console.log(res.data);
        this.setState({ 
          hidden: true,})
      }).catch(error => {
        console.log(error);
      });

    }

    onClearClicked = e => {
      this.setState({
        username: "",
        lastName: "",
        PhoneNumber:"",
        email: "",
        Address: "",
        City: "", 
        customer_notes:"",
        roleId:"",
        hidden:true,
        disabledUpdateButton: true
      })
    }


  

render() {
  console.log(this.state);
  
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
                        
                            <h2 className="dot mt-4"><span className="dot"></span>All Customers & Users List</h2>
                        </div>

{(this.state.disabledForm === true)?   
<Form className="row">
                                            
<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>First name </Label>
<Col sm={8}>
  <Input type="text" name="username" className="form-control" onChange={this.handleFields} 
  value={this.state.username} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Last name </Label>
<Col sm={8}>
  <Input type="text" name="lastName" className="form-control" onChange={this.handleFields} 
  value={this.state.lastName} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>


<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Phone </Label>
<Col sm={8}>
  <Input type="text" name="PhoneNumber" className="form-control" onChange={this.handleFields} 
  value={this.state.PhoneNumber} required={true} disabled={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label sm={4}>E-mail </Label>
<Col sm={8}>
  <Input type="text" name="email" className="form-control" onChange={this.handleFields} 
  value={this.state.email} required={true} disabled={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Address </Label>
<Col sm={8}>
  <Input type="text" name="Address" className="form-control" onChange={this.handleFields} 
  value={this.state.Address} required={true} disabled={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>city </Label>
<Col sm={8}>
  <Input type="text" name="City" className="form-control" onChange={this.handleFields} 
  value={this.state.City} required={true} disabled={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>


<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="roleId" sm={4}>User Type</Label>
<Col sm={8}>
  <select name="roleId" className="form-control" onChange={this.handleUserType} disabled={true}>
  <option key="0">Choose the User Type</option>
                            {this.state.roles.map(role => {
                            return (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            )
                        })
                        }
                        </select>
</Col>  
   <div className="help-block with-errors"></div>

</FormGroup> 


<FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>Current User Type </Label>
        <Col sm={8}>
          <Input type="text" name="u" className="form-control" 
          value={this.state.roleId} required={true} disabled={true}/>
          <div className="help-block with-errors"></div>
        
        </Col>
</FormGroup>



<div className="col-lg-12 row  mt-3 clear">

{(this.state.disabledUpdateButton === true)?     
        <FormGroup check className="col-lg-6 col-sm-12 row">
         
             <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
              style={{backgroundColor:"gray"}}  disabled={true}>Update</Button>
         
         </FormGroup> 
     
        : ""}
        
{(this.state.disabledUpdateButton === false)?  
        <FormGroup check className="col-lg-6 col-sm-12 row">
         
          <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
            onClick={this.onCustomerUpdated}>Update</Button>
    
        </FormGroup>: "" } 
  
             
        <FormGroup check className="col-lg-6  col-sm-12 row">
            <Button type="reset" value="Clear" className="col-lg-4 btn btn-primary btn-block" 
            onClick={this.onClearClicked}>Clear</Button> 
        </FormGroup>
        </div>
</Form> : ""}

{(this.state.disabledForm === false)?  

<Form className="row">
                                            
        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>First name </Label>
        <Col sm={8}>
          <Input type="text" name="username" className="form-control" onChange={this.handleFields} 
          value={this.state.username} required={true} />
          <div className="help-block with-errors"></div>
        
        </Col>
        </FormGroup>
        
        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>Last name </Label>
        <Col sm={8}>
          <Input type="text" name="lastName" className="form-control" onChange={this.handleFields} 
          value={this.state.lastName} required={true}/>
          <div className="help-block with-errors"></div>
        
        </Col>
        </FormGroup>
        
        
        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>Phone </Label>
        <Col sm={8}>
          <Input type="text" name="PhoneNumber" className="form-control" onChange={this.handleFields} 
          value={this.state.PhoneNumber} required={true} />
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
        
        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>Address </Label>
        <Col sm={8}>
          <Input type="text" name="Address" className="form-control" onChange={this.handleFields} 
          value={this.state.Address} required={true} />
          <div className="help-block with-errors"></div>
        
        </Col>
        </FormGroup>
        
        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>city </Label>
        <Col sm={8}>
          <Input type="text" name="City" className="form-control" onChange={this.handleFields} 
          value={this.state.City} required={true} />
          <div className="help-block with-errors"></div>
        
        </Col>
        </FormGroup>
        
        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="roleId" sm={4}>User Type</Label>
        <Col sm={8}>
          <select name="roleId" className="form-control" onChange={this.handleUserType}>
          <option key="0">Choose the User Type</option>
                            {this.state.roles.map(role => {
                            return (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            )
                        })
                        }
            </select>
        </Col>  
            <div className="help-block with-errors"></div>
        
        </FormGroup> 

        <FormGroup className="col-lg-6 col-sm-12 row">
        <Label for="examplePassword" sm={4}>Current User Type </Label>
        <Col sm={8}>
          <Input type="text" name="u" className="form-control" 
          value={this.state.roleId} required={true} disabled={true}/>
          <div className="help-block with-errors"></div>
        
        </Col>
        </FormGroup>
         
        <div className="col-lg-12 row  mt-3 clear">
        
        {(this.state.disabledUpdateButton === true)?     
                <FormGroup check className="col-lg-6 col-sm-12 row">
                  
                      <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
                      style={{backgroundColor:"gray"}}  disabled={true}>Update</Button>
                  
                  </FormGroup> 
              
                : ""}
                
        {(this.state.disabledUpdateButton === false)?  
                <FormGroup check className="col-lg-6 col-sm-12 row">
                  
                  <Button type="submit" className="col-lg-4 btn btn-primary btn-block" 
                    onClick={this.onCustomerUpdated}>Update</Button>
            
                </FormGroup>: "" } 
          
                      
                <FormGroup check className="col-lg-6  col-sm-12 row">
                    <Button type="reset" value="Clear" className="col-lg-4 btn btn-primary btn-block" 
                    onClick={this.onClearClicked}>Clear</Button> 
                </FormGroup>
                </div>
        </Form>: ""}

</div>




<div className="table-responsive mt-4">
       
            <MUIDataTable
              title="All Customers & Users List"
              data={this.state.datatableData}
              columns={[
                {
                  label: "ID",
                  name:  "userId" 
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
                  label: "Phone",
                  name:"PhoneNumber"
                },
                {
                  label: "E-MAIL",
                  name:"email"
                },
                {
                  label: "Address",
                  name:"Address"
                },
                {
                  label: "City",
                  name:"City"
                },
                {
                  label:"User Type",
                  name:"USER_ROLE"
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