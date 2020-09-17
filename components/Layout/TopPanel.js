import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {Trans } from "react-i18next";
import {withTranslation} from "react-i18next";
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items: 1,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ]
}

class TopPanel extends Component {

    state = { 
        display: false,
        panel: true,
        value: ""
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        let { panel } = this.state;
        const { t, i18n } = this.props;
        console.log(this.props);
        return (
            <div className={`top-panel ${panel ? '' : 'hide'}`}>
                <div className="container">
                    <div className="panel-content">
                        {this.state.display ? <OwlCarousel 
                            className="top-panel-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-item-box">
                                <p><strong><Trans>{t("discount")}</Trans></strong></p>
                            </div>

                            <div className="single-item-box">
                                <p><strong><Trans>{t("discount")}</Trans></strong></p>
                            </div>

                            <div className="single-item-box">
                                <p><strong><Trans>{t("discount")}</Trans></strong></p>
                                {/* <p><strong>Enjoy an extra 20% off</strong> select sales styles <Link href="#"><a>Read More</a></Link></p> */}
                            </div>
                        </OwlCarousel> : ''}

                        <i onClick={() => this.setState({panel: false})} className="fas fa-times panel-close-btn"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withTranslation("translations") (TopPanel));
