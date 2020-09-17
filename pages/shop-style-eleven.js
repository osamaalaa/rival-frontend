import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/shop-style-eleven/BannerSlider';
import ProductCategories from '../components/shop-style-eleven/ProductCategories';
import SpecialOffer from '../components/shop-style-eleven/SpecialOffer';
import Facility from '../components/Common/Facility';
import BestSellersProducts from '../components/shop-style-eleven/BestSellersProducts';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class ShopStyleEleven extends Component {
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default ShopStyleEleven;