import React, { Component } from 'react';
import Link from "next/link";
import {Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText} from 'react-sidebar-ui'
//import 'react-sidebar-ui/dist/index.css';

class SideAdmin extends Component {
      
//       state = {
//             display: false,
//             collapsed: true,
//         };
    
//       toggleNavbar = () => {
//             var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;
// var x = document.getElementById("test");
// x.innerHTML = "Browser inner window width: " + w;
//             this.setState({
//                 collapsed: !this.state.collapsed,
//             }); }

      // updateDimensions() {
      //       if (window.screen.width >=991) {
      //            alert('more')
      //           }
      //        else {
      //             alert('less')
      //       }
      //     }
    render() {
      // const { collapsed , showAdminBoard } = this.state;
      // const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
      // const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
           <Sidebar>
            {/* <Sidebar breakpoints={{ 768: css(styles.mainContainerMobile) }}> */}
            {/* <Sidebar isCollapsed={false}> */}
                              <br/>

                              <Item >
                              <Link href="/board-admin">
                                    <a><Icon><i className="fas fa-home"/></Icon>Home</a>
                              </Link>
                              
                              </Item>
                              <hr/>
                              <Item>
                              
 
                              <a> Charts and Reports</a>
                              <small> 
                              <p>
                              <Link href="/admin-visitors">
                              <a> <Icon><i className="fas fa-eye"/></Icon>Page Visitors</a>
                              
                              </Link></p>
                              </small>
                              </Item>
                              <hr/>
                              <Item>
                              
                                          
                                    <a> Orders Management</a>
                                  
                                    <small>  
      
                              <p>
                              <Link href="/admin-invoices">
                              <a> <Icon><i className="fas fa-file-invoice-dollar"/></Icon>Invoices List</a>
                              </Link></p>
                              <p>
                              <Link href="/admin-payments">
                              <a> <Icon><i className="fas fa-credit-card"/></Icon>Payments List</a>
                              </Link></p>
                           


                                    </small>

</Item>
<hr/>
<Item>
      <a> Products Management</a>
      <small>  
                              <p>
                              <Link href="/product-sales">
                              <a>  <Icon><i className="fas fa-chart-line"/></Icon>Products Sales</a>
                              </Link></p>
                              <p>
                              <Link href="/admin-pdetails">
                              <a>  <Icon><i className="fas fa-luggage-cart"/></Icon>Product Details</a>
                              </Link></p>
                              <p>
                              <Link href="/admin-products">
                              <a>  <Icon><i className="fas fa-shopping-bag"/></Icon>Products List</a>
                              </Link></p>
                              
                  

       </small>

</Item>
<hr/>
<Item>
      <a> Customers Management</a>
      <small>  
                              <p>
                              <Link href="/admin-clist">
                              <a>  <Icon><i className="fas fa-users"/></Icon>Registered Customers List</a>
                              </Link></p>
                              
                              <p>
                              <Link href="/admin-all-customers-list">
                              <a>  <Icon><i className="fas fa-users"/></Icon>All Customers List</a>
                              </Link></p>

                              <p>
                              <Link href="/admin-cdetails">
                              <a> <Icon><i className="fas fa-shopping-cart"/></Icon>Customer's Details</a>
                              </Link></p>
                       

       </small>

</Item>
<hr/>

<Item>
      <a> Staff Managment</a>
      <small>  
    
                              <p>
                              <Link href="/admin-users">
                              <a>  <Icon><i className="fas fa-id-card"/></Icon>Registered Cust. & Users List</a>
                              </Link></p>

                              <p>
                              <Link href="/admin-all-customers-and-users">
                              <a>  <Icon><i className="fas fa-id-card"/></Icon>All Customers & Users List</a>
                              </Link></p>
                              
       </small>

</Item>

<hr/>
<Item>
      <a>Website Content Management</a>
      <small>  
    
                              <p>
                              <Link href="/admin-contact">
                              <a>  <Icon><i className="fa fa-phone"/></Icon>Contacts, Promos & Policies</a>
                              </Link></p>
                              
       </small>

</Item>


<hr/>
<br/>
</Sidebar>
</React.Fragment>
            );
        }
    }
    
    export default SideAdmin;