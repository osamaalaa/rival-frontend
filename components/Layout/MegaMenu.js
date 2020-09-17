import React, { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
import Cart from '../Modal/Cart';
import AuthService from "../../services/auth.service";
import {Trans } from "react-i18next";
import {withTranslation} from "react-i18next";
import axios from "axios";

class MegaMenu extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
            display: false,
            searchForm: false,
            collapsed: true,
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            websiteFacebook: '',
            websiteInstgram: '',
        };
      }





    // state = {
    //     display: false,
    //     searchForm: false,
    //     collapsed: true,
    //     showModeratorBoard: false,
    //     showAdminBoard: false,
    //     currentUser: undefined
    // };

    handleCart = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
    //    let elementId2 = document.getElementById("side");

        document.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                elementId.classList.add("is-sticky");
         //       elementId2.classList.add("side-sticky");
            } else {
                elementId.classList.remove("is-sticky");
         //       elementId2.classList.remove("side-sticky");

            }
        });
        window.scrollTo(0, 0);

        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN")
          });
        }

        axios.get('http://localhost:4000/RivalServices/contact-info')
        .then(res => {
            this.setState({
              websiteFacebook: res.data[0].facebook_link,
              websiteInstgram: res.data[0].instgram_link,
             
            });
            console.log(res.data);

            console.log(this.state.websitePhone);
        })
        .catch(function (error) {
            console.log(error);
        })       
    }


    logOut() {
        AuthService.logout();
      }


    
    render() {
        const { collapsed , showAdminBoard ,currentUser, showModeratorBoard} = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        
        let { products } = this.props;
        const { t, i18n } = this.props;
        return (
            <React.Fragment>
            <div className="navbar-area">
                <div id="navbar" className="comero-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                 
                                {showAdminBoard && (
                                                <li className="nav-item">
                                                <Link href="/board-admin">
                                                    <a className="nav-link"><strong><Trans>{t("Admin")}</Trans> </strong></a>
                                                </Link>
                                                </li>
                                            )}           
                                </ul>

                                <div className="others-option">
                                    <div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn fas fa-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>

                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn fas fa-times ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            Style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="option-item">
{/*                                         
                                        <Link href="/login">
                                            <a><Trans>{t("Sign In / Register")}</Trans></a>
                                        </Link> */}


                                                    {currentUser ? (
                                                                <div className="navbar-nav ml-auto">
                                                                    
                                                                    {/* <li className="nav-item">
                                                                    <a href="/login" className="nav-link" onClick={this.logOut}>
                                                                        LogOut
                                                                    </a>
                                                                    </li> */}
                                                                      <Link href="/login" >
                                                                                     <a Style="margin-left: 11px; margin-right: 21px;">{currentUser.username +" " +currentUser.lastName}</a>
                                                                      </Link>
                                                                                                                        
                                                                        <Link href="/login">
                                                                            <a onClick={this.logOut}><Trans>{t("Sign out")}</Trans></a>
                                                                        </Link>

                                                                </div>
                                                                ) : (
                                                                <div className="navbar-nav ml-auto">
                                                                                                                                        
                                                                        <Link href="/login">
                                                                            <a><Trans>{t("Sign In / Register")}</Trans></a>
                                                                        </Link>

                                                                </div>
                                                                )}


                                    </div>
                                    <div className="option-item">
                                        <a target="_blank" href={this.state.websiteFacebook}>
                                            <i className="fab fa-facebook-f  border p-2 rounded-circle"></i>
                                        </a>
                                    </div>

                                    <div className="option-item">
                                        <a target="_blank" href={this.state.websiteInstgram}>
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                            
                                    <div className="option-item">
                                        <Link href="#">
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    this.handleCart()
                                                }}
                                            >
                                                ({products.length}) <Trans>{t("cart")}</Trans>
                                                <i className="fas fa-shopping-bag ml-2"></i>
                                            </a>
                                        </Link>
                                    </div>
                            

                            
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {this.state.display ? <Cart onClick={this.handleCart} /> : ''}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default connect(mapStateToProps) (withTranslation("translations")(MegaMenu));
