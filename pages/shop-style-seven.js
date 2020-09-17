import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/shop-style-seven/BannerSlider';
import ProductCategories from '../components/shop-style-seven/ProductCategories';
import PopularProducts from '../components/shop-style-seven/PopularProducts';
import ProductsCategoryStyleTwo from '../components/shop-style-seven/ProductsCategoryStyleTwo';
import BestSellersProducts from '../components/shop-style-seven/BestSellersProducts';
import Facility from '../components/Common/Facility';
import TrendingProducts from '../components/shop-style-seven/TrendingProducts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import NewsThree from '../components/Common/NewsThree';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class ShopStyleSeven extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                
                <ProductCategories />
                <PopularProducts />
                <ProductsCategoryStyleTwo />
                <BestSellersProducts />
                <Facility />
                <TrendingProducts />
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

export default ShopStyleSeven;