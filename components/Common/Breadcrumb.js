import React, { Component } from 'react';
import Link from 'next/link';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
// import BoardAdmin from "./components/board-admin.component";

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined
        };
      }
    
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN")
          });
        }
      }
    
      logOut() {
        AuthService.logout();
      }
    render() {
      
        return (
            <div className="page-title-area">
                <div className="container" >
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                           
                        </li>

                       

                            
                        <li>{this.props.title}</li>
                    </ul>
                </div>
            </div>
        );
    } 
}

export default Breadcrumb;
