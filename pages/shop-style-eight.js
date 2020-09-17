import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/shop-style-eight/BannerSlider';
import ProductCategories from '../components/shop-style-eight/ProductCategories';
import PopularProducts from '../components/shop-style-eight/PopularProducts';
import ProductsCategoryStyleTwo from '../components/shop-style-eight/ProductsCategoryStyleTwo';
import BestSellersProducts from '../components/shop-style-eight/BestSellersProducts';
import Facility from '../components/Common/Facility';
import TrendingProducts from '../components/shop-style-eight/TrendingProducts';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import NewsThree from '../components/Common/NewsThree';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class ShopStyleEight extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <ProductCategories />
                <PopularProducts />
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

export default ShopStyleEight;