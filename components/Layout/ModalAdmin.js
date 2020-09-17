import React, { Component } from 'react';
import Link from "next/link";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';

class ModalAdmin extends Component {
    render() {
        return (
            <React.Fragment>
     <div>
                                                <Button Style="background-color: #104249; color: white;" onClick={this.toggle_two}>Add New Product</Button>
                                          
                                            </div>
    <Modal isOpen={this.state.modal} fade={this.state.fade }  toggle={this.toggle_two}>
                                                    <ModalHeader toggle={this.toggle}>Edit Product</ModalHeader>
                                                    <ModalBody>     
                                                        <Form  onSubmit={(e, formData, inputs) => {
                                            e.preventDefault();
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
                                                                <Input type="file" name="file" id="exampleFile" onChange={this.handleFields}/>
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
                                                    <ModalBody>     


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
                                                                      <FileInput name="image" id="image" required 
                                                                              errorMessage="Please upload a Image"
                                                                              fileType={["jpg" , "png"]} maxFileSize="120 kb"/>
                                                                  </div></div>

                                                            

                                                                  <div className="form-group mt-3">
                                                                      <button className="btn btn-primary">Save</button>
                                                                      <button className="btn btn-default ml-2" type="button" onClick={this.resetForm}>Reset</button>
                                                                  </div>
                                                              </ValidationForm>

                                                    </ModalBody>
                                                    <ModalFooter>
                                                        
                                                        <Button onClick={this.toggle_two}>Cancel</Button>
                                                    </ModalFooter>
                                                </Modal>
</React.Fragment>
            );
        }
    }
    
    export default ModalAdmin;