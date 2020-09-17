import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/shop-style-ten/BannerSlider';
import ProductCategories from '../components/shop-style-ten/ProductCategories';
import SpecialOffer from '../components/shop-style-ten/SpecialOffer';
import ProductsCategoryStyleTwo from '../components/shop-style-ten/ProductsCategoryStyleTwo';
import TrendingProducts from '../components/shop-style-ten/TrendingProducts';
import Facility from '../components/Common/Facility';
import BestSellersProducts from '../components/shop-style-ten/BestSellersProducts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import NewsThree from '../components/Common/NewsThree';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class ShopStyleTen extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />  
                <ProductCategories />
                <SpecialOffer />
                <ProductsCategoryStyleTwo />
                <TrendingProducts />
                <Facility />
                <BestSellersProducts />
                <TestimonialsTwo />
                <NewsThree />
                <Subscribe />
                <Partner />
                <InstagramPhoto />
                <Footer /> 
                <AddsModal />
            </React.Fragment>
        );
    }
}

export default ShopStyleTen;