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
    this.formRef = React.createRef();
    this.state = {
      datatableData:[],
      modal2: false,
      // show: false
      modal: false,
        fade: false,

        product_id: "",
        PRODUCT_NAME: "",
        price: "",
        category: "",
        description: "",
        immediate:true,
        setFocusOnError:true,
        clearInputOnReset:false
    };
    // console.log(AuthService.getCurrentUser())
    this.toggle = this.toggle.bind(this);
    this.toggle_two = this.toggle_two.bind(this);
  }
  
  toggle() {
    console.log("hello");
    this.setState({
        modal: !this.state.modal
    });
    console.log( 'after setState: ', this.state );
}
toggle_two() {
  console.log("hello");
  this.setState({
      modal2: !this.state.modal2
  });
  console.log( 'after setState: ', this.state );
}

handleSubmit = (e, formData) => {
  e.preventDefault();
  console.log(formData);
  // alert(JSON.stringify(formData, null, 2));


  axios
  .post("http://localhost:4000/RivalServices/newproduct", formData, {
      headers: { Accept: "application/json" }
  })
  .then(function(response) {
      console.log(response);
      document.getElementById("productForm").reset();
     
      // that.setState({
      //     // [e.target.name]: e.target.value,
      //     successMsg: "Thank you! We received your message"
          
      // });
    
      document.getElementById("productForm").reset();
  })
  .catch(function(error) {});

}

handleErrorSubmit = (e,formData, errorInputs) => {
  console.log(e,formData)
}

resetForm = () => {
  let formRef = this.formRef.current;
  formRef.resetValidationState(this.state.clearInputOnReset);
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

    axios.get('http://localhost:4000/RivalServices/allproducts')
    .then(res => {
     
      
        this.setState({ datatableData: res.data });
        // console.log(res.data);

        // console.log(res.data)
    })
    .catch(function (error) {
        console.log(error);
    })

    // console.log(response.data);
  }

 

   handleRowClick = (rowData) => {
      //  this.showModal
    
      this.setState({
        modal: true,
        id: rowData[0],
        PRODUCT_NAME: rowData[1],
        price: rowData[2],
        category: rowData[3],
        description: rowData[4]
      });


    
    // console.log("Product ID "+ rowData[0] + " "+ rowData[1]);
};

handleChange = e => {
  console.log(e);
  


  console.log("product Name: " + this.state);
  // this.props.onChange(e);
};
handleFields = e => this.setState({ [e.target.name]: e.target.value } ) ;

handleButtonSubmit = (e , formData) => {

  let data = {
    product_id: this.state.id,
    PRODUCT_NAME:this.state.PRODUCT_NAME,
    price: this.state.price,
    category: this.state.category,
    description: this.state.description,

  }

  console.log(data);
  // console.log(this.state);
  // console.log( data)
  let that = this;
        axios
            .post("http://localhost:4000/RivalServices/updateProducts", data, {
                headers: { Accept: "application/json" }
            })
            .then(function(response) {
                console.log(response);
                // document.getElementById("tForm").reset();
                alert("product updated Successfuly");
               
              
                // document.getElementById("contactForm").reset();
            })
            .catch(function(error) {
              console.log(error);
            });

  console.log("formSubmitted")

    console.log("newState " + this.state.PRODUCT_NAME)
}
mySubmitHandler = (event) => {
       
  // alert("Thank you for submitting We will be in Touch");
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
                                           <h2><span className="dot"></span>Product Details</h2>
                                       </div>
                                       <div classname="table-responsive">
                                                <MUIDataTable
                                                  title="Product Details"
                                                  className="table table-border"
                                                  data={this.state.datatableData}
                                                  columns={
                                                    
                                                    [
                                                      {
                                                        label:"Product Id",
                                                        name:"product_id"
                                                    },
                                                    {
                                                      label:"Product Name",
                                                      name:"PRODUCT_NAME"
                                                    },
                                                    {
                                                      label:"Description",
                                                      name:"description"
                                                    },
                                                    {
                                                      label:"Category",
                                                      name:"category"
                                                    },
                                                    {
                                                      label:"Price",
                                                      name:"price"
                                                    },
                                                    
                                                    {
                                                      label:"Quantity",
                                                      name:"quantity"
                                                    },
                                                    {
                                                      label:"Image",
                                                      name:"image_path"
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
{/* <ModalAdmin/> */}
<div className="clearfix"></div>

                                                <Button className="shift-btn" onClick={this.toggle_two}>Add New Product</Button>
                                                <Modal isOpen={this.state.modal} fade={this.state.fade }  toggle={this.toggle_two}>
                                                    <ModalHeader toggle={this.toggle}>Edit Product</ModalHeader>
                                                    <ModalBody className="admin">     
                                                        <Form  onSubmit={(e, formData, inputs) => {
                                            
                                            this.handleButtonSubmit(formData);
                                            this.mySubmitHandler();
                                        }}>
                                                               <FormGroup>
                                                                <Label for="exampleText">Product ID</Label>
                                                                <Input type="textarea" name="priduct_id" id="exampleText" value={this.state.id}  />
                                                              </FormGroup>
                                                              <FormGroup>
                                                                <Label for="exampleText">Product Name</Label>
                                                                <Input type="textarea" name="PRODUCT_NAME" id="exampleText" value={this.state.PRODUCT_NAME} onChange={this.handleFields}/>
                                                              </FormGroup>
                                                              <FormGroup>
                                                                <Label for="exampleText">Product Price</Label>
                                                                <Input type="number" name="price" id="exampleText" value={this.state.price} onChange={this.handleFields} />
                                                              </FormGroup>
                                                              <FormGroup>
                                                                <Label for="exampleText">Product Desciption</Label>
                                                                <Input type="textarea" name="description" id="exampleText" value={this.state.description} onChange={this.handleFields}/>
                                                              </FormGroup>
                                                              <FormGroup>
                                                                <Label for="exampleText">Product category</Label>
                                                                <Input type="textarea" name="category" id="exampleText" value={this.state.category} onChange={this.handleFields} />
                                                              </FormGroup>
                                                              <FormGroup>
                                                                <Label for="exampleFile">Procut Image</Label>
                                                                <div className="custom-file-input form-control">
                                                                <Input type="file" name="file" id="exampleFile" onChange={this.handleFields}/>
                                                               </div>
                                                                <FormText color="muted">
                                                                  After Edit the product please click Save
                                                                </FormText>
                                                              </FormGroup>
                                                             
                                                              
                                                              <Button type="submit" onSubmit={this.handleButtonSubmit}>Save</Button>
                                                            </Form>


                                                    </ModalBody>
                                                    <ModalFooter>
                                                        
                                                        <Button onClick={this.toggle} >Cancel</Button>
                                                    </ModalFooter>
                                                </Modal>


                                                <Modal isOpen={this.state.modal2} fade={this.state.fade }  toggle={this.toggle_two}>
                                                    <ModalHeader toggle={this.toggle_two}>New Product</ModalHeader>
                                                    <ModalBody className="admin">     


                                                    <ValidationForm  id="productForm" onSubmit={this.handleSubmit} onErrorSubmit={this.handleErrorSubmit}
                                                                          ref={this.formRef}
                                                                          immediate={this.state.immediate}
                                                                          setFocusOnError={this.state.setFocusOnError}
                                                                          defaultErrorMessage={{ required: "Product Error!"}} >
                                                                  <div className="form-group">
                                                                      <label htmlFor="product_id">ProductID</label>
                                                                      <TextInput name="product_id" id="product_id" type="number" required/>
                                                                  </div>
                                                                  <div className="form-group">
                                                                      <label htmlFor="PRODUCT_NAME">Product Name</label>
                                                                      <TextInput name="PRODUCT_NAME" id="PRODUCT_NAME" required/>
                                                                  </div>

                                                                  <div className="form-group">
                                                                      <label htmlFor="price">Price</label>
                                                                      <TextInput name="price" id="price"  type="number" required/>
                                                                  </div>

                                                                  <div className="form-group">
                                                                      <label htmlFor="category">Category</label>
                                                                      <TextInput name="category" id="category" required/>
                                                                  </div>
                                                                  <div className="form-group">
                                                                      <label htmlFor="description">Description</label>
                                                                      <TextInput name="description" id="description" required/>
                                                                  </div>

                                                                  <div className="form-group">
                                                                      <label htmlFor="image">Image Product</label>
                                                                    <div className="custom-file-input form-control">
                                                                      <input type="file" name="image" id="image" required 
                                                                              errorMessage="Please upload a Image"
                                                                              fileType={["jpg" , "png"]} maxFileSize="120 kb"/>
                                                                  </div></div>

                                                            

                                                                  <div className="form-group mt-3">
                                                                      <button className="btn btn-primary">Save</button>
                                                                      <input type="reset" value="Reset" className="btn btn-default ml-2" type="button" onClick={this.resetForm}/>
                                                                  </div>
                                                              </ValidationForm>

                                                    </ModalBody>
                                                    <ModalFooter>
                                                        
                                                        <Button onClick={this.toggle_two}>Cancel</Button>
                                                    </ModalFooter>
                                                </Modal>
                                            </div>
                                    </div>
                          </div>
          </div>
     </div>
    </React.Fragment>
           
    );
  }
}