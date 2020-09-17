import React, { Component } from 'react';
import Link from 'next/link';
import Wishlist from '../Modal/Wishlist';
import {Trans } from "react-i18next";
import {withTranslation} from "react-i18next";
class TopHeader extends Component {

    state = {
        display: false
    };

    handleWishlist = () => {
        this.setState( prevState => {
            return {
                display: !prevState.display
            };
        });
    }
    handleChange = event => {
        console.log("selected val is ", event.target.value);
        let newlang = event.target.value;
        this.setState(prevState => ({ value: newlang }));
        console.log("state value is", newlang);
        this.props.i18n.changeLanguage(newlang);
      };
    render() {
        const { t, i18n } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="top-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-6">
                                <ul className="top-header-nav">
                                    <li><Link href="/about"><a><Trans>{t("About")}</Trans></a></Link></li>
                                    {/* <li><Link href="/"><a>Our Stores</a></Link></li> */}
                                    {/* <li><Link href="/faq"><a>FAQ's</a></Link></li> */}
                                    <li><Link href="/contact-us"><a> <Trans>{t("Contact")}</Trans> </a></Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-5 col-md-6">
                                <ul className="top-header-right-nav">
                                    <li>
                                        <Link href="#">
                                            <a 
                                                data-toggle="modal" 
                                                data-target="#shoppingWishlistModal"
                                                onClick={e => {
                                                    e.preventDefault();
                                                    this.handleWishlist()
                                                }}
                                            >
                                               <Trans>{t("Wishlist")}</Trans>  <i className="far fa-heart"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare">
                                            <a><Trans>{t("Compare")}</Trans> <i className="fas fa-balance-scale"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="languages-list">
                                            <select value={this.state.value} onChange= {this.handleChange}>
                                                <option value="en">English</option>
                                                <option value="ar">عربي</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {this.state.display ? <Wishlist onClick={this.handleWishlist} /> : ''}
            </React.Fragment>
        );
    }
}

export default (withTranslation("translations")(TopHeader));
