import React, { Component } from 'react';
import Link from 'next/link';

class ProductsCategoryStyleTwo extends Component {
    render() {
        return (
            <section className="category-products-area pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="single-category-box">
                                <img src={require("../../images/category-image/category-new-img1.jpg")} alt="image" />

                                <div className="category-content">
                                    <h3>Our Popular Products</h3>
                                    <Link href="#">
                                        <a className="btn btn-light">View More</a>
                                    </Link>
                                </div>

                                <Link href="#">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-image/category-new-img2.jpg")} alt="image" />
            
                                        <div className="category-content">
                                            <h3>Winter Collections</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-image/category-new-img3.jpg")} alt="image" />
            
                                        <div className="category-content">
                                            <h3>Summer Collections</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="single-category-box">
                                        <img src={require("../../images/category-image/category-new-img4.jpg")} alt="image" />
            
                                        <div className="category-content">
                                            <h3>Up to 75% OFF Spring Sale!</h3>
                                        </div>
            
                                        <Link href="#">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProductsCategoryStyleTwo;