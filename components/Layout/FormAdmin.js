import React, { Component } from 'react';
import Link from "next/link";
import 'react-sidebar-ui/dist/index.css';

class FormAdmin extends Component {
    render() {
        return (
            <React.Fragment>
               <section className="contact-area">         

       <div className="contact-form">
                        <div className="section-title">
                        
                            <h2><span className="dot"></span>Order Details</h2>
                        </div>
        <Form className="row" onSubmit={(e, formData) => {
                                            e.preventDefault();
                                            this.handleForm(formData);
                                        }}>
                                            
     

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>first name </Label>
<Col sm={8}>
  <Input type="text" name="customer_first_name" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>last name </Label>
<Col sm={8}>
  <Input type="text" name="customer_last_name" className="form-control" onChange={this.handleFields } required={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>
             
<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>counrty </Label>
<Col sm={8}>
  <Input type="text" name="customer_country" className="form-control" onChange={this.handleFields } required={true}/>
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>
<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>Address </Label>
<Col sm={8}>
  <Input type="text" name="customer_Address" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>city </Label>
<Col sm={8}>
  <Input type="text" name="customer_city" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>state </Label>
<Col sm={8}>
  <Input type="text" name="customer_state" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>postal </Label>
<Col sm={8}>
  <Input type="text" name="customer_postal" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label sm={4}>email </Label>
<Col sm={8}>
  <Input type="text" name="customer_email" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>phone </Label>
<Col sm={8}>
  <Input type="text" name="customer_phone" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>notes </Label>
<Col sm={8}>
  <Input type="text" name="customer_notes" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>products details </Label>
<Col sm={8}>
  <Input type="text" name="products_details" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>billing method </Label>
<Col sm={8}>
  <Input type="text" name="billing_method" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>total price</Label>
<Col sm={8}>
  <Input type="text" name="products_price_total" className="form-control" onChange={this.handleFields } required={true} />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>


<FormGroup className="col-lg-6 col-sm-12 row">
<Label for="examplePassword" sm={4}>order status</Label>
<Col sm={8}>
  <Input type="text" name="price" 
  className="form-control" 
  required={true}
  data-error="Please enter price"
   placeholder="Enter price"
    onChange={this.handleFields } />
  <div className="help-block with-errors"></div>

</Col>
</FormGroup>

      
<div className="col-lg-12 row clear">
        <FormGroup check className="col-lg-6 row">
         
            <Button type="submit" className="col-lg-4 btn btn-primary btn-block" >Save</Button>
         
        </FormGroup>
             
        <FormGroup check className="col-lg-6 row">
         
            <input type="reset" value="Clear" className="col-lg-4 btn btn-primary btn-block" />
         
        </FormGroup>
        </div>
                            </Form>

</div>
</section>

</React.Fragment>
            );
        }
    }
    
    export default FormAdmin;