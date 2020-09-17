// // import React, { Component } from "react";
// // import AuthService from "../services/auth.service";

// // export default class Profile extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     currentUser: AuthService.getCurrentUser()
//   //   };
//   // }

// //   render() {
// //     const { currentUser } = this.state;

// //     return (
//       // <div className="container">
//       //   <header className="jumbotron">
//       //     <h3>
//       //       <strong>{currentUser.username}</strong> Profile
//       //     </h3>
//       //   </header>
//       //   <p>
//       //     <strong>Token:</strong>{" "}
//       //     {currentUser.accessToken.substring(0, 20)} ...{" "}
//       //     {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//       //   </p>
//       //   <p>
//       //     <strong>Id:</strong>{" "}
//       //     {currentUser.id}
//       //   </p>
//       //   <p>
//       //     <strong>Email:</strong>{" "}
//       //     {currentUser.email}
//       //   </p>
//       //   <strong>Authorities:</strong>
//       //   <ul>
//       //     {currentUser.roles &&
//       //       currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//       //   </ul>
//       // </div>
// //     );
// //   }
// // }


import React, { Component } from 'react';
import AuthService from "../services/auth.service";
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Breadcrumb from '../components/Common/Breadcrumb';
import ProductsCollectionsTwo from '../components/collections-styles/ProductsCollectionsTwo';
import Facility from '../components/Common/Facility';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

    render() {
        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <Breadcrumb title="profile" /> 
                {/* <ProductsCollectionsTwo /> */}  
                {/* <Facility /> */}
                <div className="container">
                          <header className="jumbotron">
                            <h3>
                              <strong>{currentUser.username}</strong> Profile
                            </h3>
                          </header>
                          <p>
                            <strong>Token:</strong>{" "}
                            {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                          </p>
                          <p>
                            <strong>Id:</strong>{" "}
                            {currentUser.id}
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                          </p>
                          <strong>Authorities:</strong>
                          <ul>
                            {currentUser.roles &&
                              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                          </ul>
                        </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
