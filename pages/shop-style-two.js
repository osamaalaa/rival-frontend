import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AddsModal from '../components/Modal/AddsModal';
import Banner from '../components/shop-style-two/Banner';
import OfferArea from '../components/shop-style-two/OfferArea';
import Products from '../components/shop-style-two/Products';
import CategoryProducts from '../components/shop-style-two/CategoryProducts';
import TrendingProducts from '../components/shop-style-two/TrendingProducts';
import BestSeller from '../components/shop-style-two/BestSellers';
import Facility from '../components/shop-style-two/Facility';
import Testimonials from '../components/Common/Testimonials';
import News from '../components/Common/News';
import Subscribe from '../components/Common/Subscribe';
import Partner from '../components/Common/Partner';
import InstagramPhoto from '../components/Common/InstagramPhoto';

class Index extends Component {
    render() {
        return (
            <React.Fragment>   
                <Navbar />
                <Banner />
                <OfferArea />
                <Products />
                <CategoryProducts />
                <TrendingProducts />
                <BestSeller />
                <Facility />
                <Testimonials />
                <News />
                <Subscribe />
                <Partner />
                <InstagramPhoto />
                <Footer />
                <AddsModal />
            </React.Fragment>
        );
    }
}

export default Index;
