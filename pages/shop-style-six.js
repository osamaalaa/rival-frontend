import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/shop-style-six/BannerSlider';
import ProductCategories from '../components/shop-style-six/ProductCategories';
import AllProducts from '../components/shop-style-six/AllProducts';
import ProductsCategoryStyleTwo from '../components/shop-style-six/ProductsCategoryStyleTwo';
import TrendingProducts from '../components/shop-style-six/TrendingProducts';
import BestSeller from '../components/shop-style-six/BestSeller';
import Facility from '../components/Common/Facility';
import TestimonialsTwo from '../components/Common/TestimonialsTwo';
import NewsTwo from '../components/Common/NewsTwo';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';

class ShopStyleSix extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <ProductCategories />
                <AllProducts />
                <ProductsCategoryStyleTwo />
                <TrendingProducts />
                <BestSeller />
                <Facility />
                <TestimonialsTwo />
                <NewsTwo />
                <Subscribe />
                <Partner />
                <InstagramPhoto />
                <Footer />
                <AddsModal />
            </React.Fragment>
        );
    }
}

export default ShopStyleSix;