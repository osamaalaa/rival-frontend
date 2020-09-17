import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Col, Card, CardBody,
    CardTitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import Link from 'next/link';
import axios from "axios";




export default class FormGrid extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = {
        product_id: null,
        name:'',
        price:'',
        category:null,
        description:'',
        image_path:''
        };
      
    }
    

    handleForm = e => {
        let that = this;
        axios
            .post('http://localhost:4000/RivalServices/newproduct', this.state, {
                //headers: { Accept: "application/json" }
            })
            // .then(function(response) {
            //     document.getElementById("contactForm").reset();
            //     that.setState({
            //         successMsg: "Thank you! We received your message"
            //     });
            //     document.getElementById("contactForm").reset();
            // })
            // .catch(function(error) {});
            console.log( this.state );
         // console.log( formData );
    };
    

    handleFields = e => this.setState({ [e.target.name]: e.target.value });
 
    render() {
        return (
            <Fragment>
                <div>
      <Sidebar bgColor='light' isCollapsed={false}>
      <Logo
          image='../images/logo.png'
          imageName='Rival logo'/>
        <LogoText>Rival Store </LogoText>
   <br/>
   <br/>
        <Item  bgColor='light'>
        <Link href="/graphs">
              <a Style="color:#000000;">  <Icon><i className="fas fa-home"/></Icon> Graphs</a>
        </Link>
         
       
        </Item>
        <br/>
        <Item bgColor='light'>
          
          <Link href="/FormGrid">
              <a Style="color:#000000;"> <Icon><i className="fas fa-info"/></Icon> Add products</a>
        </Link>
        </Item>
        <br/>
        <Item bgColor='light'>
        <Link href="/index">
              <a Style="color:#000000;"> <Icon><i className="fas fa-sitemap"/></Icon> My website</a>
        </Link>
        </Item>
        <br/>
        <Item bgColor='light'>
        <Link href="/board-admin">
              <a Style="color:#000000;"> <Icon><i className="fas fa-sitemap"/></Icon> users</a>
        </Link>
        </Item>
        <br/>

        <InputItem type='text' placeholder={'Search...'}/>
      </Sidebar>
    </div>
    
                <ReactCSSTransitionGroup
                Style="margin-left:400px; margin-top:100px; margin-right:100px;"
                    id="form"
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                   
                     
                            <CardTitle >Import Product information</CardTitle>
                            <br/>
                            <Form  Style="margin-left:90px; margin-top:90px; margin-right:100px;"    onSubmit={(e, formData) => {
                                            e.preventDefault();
                                            this.handleForm(formData);
                                        }}>
                                            
          <FormGroup row>
          <Label for="exampleSelect" sm={2}>ID:</Label>
          <Col sm={10}>
            <Input Style=" border: 1px solid black; border-radius: 2px;" type="select" name="product_id" onChange={this.handleFields }  >
              <option >1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Name</Label>
          <Col sm={10}>
            <Input Style=" border: 1px solid black; border-radius: 2px;" type="text" name="name"    onChange={this.handleFields } />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Price</Label>
          <Col sm={10}>
            <Input Style=" border: 1px solid black; border-radius: 2px;" type="text" name="price"  placeholder="price placeholder"   onChange={this.handleFields } />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>category:</Label>
          <Col sm={10}>
            <Input Style=" border: 1px solid black; border-radius: 2px;" type="select" name="category" onChange={this.handleFields }  >
              <option >Featured</option>
              <option>latest</option>
              <option>special</option>
              
            </Input>
          </Col>
        </FormGroup>
     
        <FormGroup row>
          <Label for="exampleText" sm={2}>Description</Label>
          <Col sm={10}>
            <Input Style=" border: 1px solid black; border-radius: 2px;" type="textarea" name="description"   onChange={this.handleFields }/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>Insert image </Label>
          <Col sm={10}>
            <Input  type="file" name="image_path"   onChange={this.handleFields } />
           
          </Col>
        </FormGroup>
      
     
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
                            </Form>
                        
                
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}