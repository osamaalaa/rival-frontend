import React, { Component } from 'react';
import Link from 'next/link';
import {Trans } from "react-i18next";
import {withTranslation} from "react-i18next";
class Banner extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div className="main-banner item-bg1">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="main-banner-content">
                                <span></span>
                                <h1><Trans>{t("bannerh")}</Trans></h1>
                                {/* <p>Trending from bags women style collection</p> */}

                                <Link href="#">
                                    <a className="btn btn-primary"><b Style="font-family: Segoe UI; font-size:25px;"><Trans>{t("bannerB")}</Trans></b></a>
                                </Link>
                                {/* <Link href="#">
                                    <a className="btn btn-light">Shop Men's</a>
                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (withTranslation("translations")(Banner));
