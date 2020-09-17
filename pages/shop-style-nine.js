import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/shop-style-nine/BannerSlider';
import ProductCategories from '../components/shop-style-nine/ProductCategories';
import SpecialOffer from '../components/shop-style-nine/SpecialOffer';
import BestSellersProducts from '../components/shop-style-nine/BestSellersProducts';
import Facility from '../components/Common/Facility';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class ShopStyleNine extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="boxed-layout-wrapper">
                    <div className="boxed-layout-content">
                        <Navbar />
                        <BannerSlider />
                        <ProductCategories />
                        <SpecialOffer />
                        <Facility />
                        <BestSellersProducts />
                        <Subscribe />
                        <Partner />
                        <InstagramPhoto />
                        <Footer /> 
                        <AddsModal />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ShopStyleNine;