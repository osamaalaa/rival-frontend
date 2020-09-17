import '../assets/styles/bootstrap.min.css';
import '../assets/styles/fontawesome.min.css';
import '../assets/styles/animate.min.css';
import '../assets/styles/slick.css';
import '../assets/styles/slick-theme.css';
import '../assets/styles/style.css';
import '../assets/styles/responsive.css';

import { Provider } from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';
import { DefaultSeo } from 'next-seo';
import GoTop from '../components/Shared/GoTop';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "../themes";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import ChatBot from '../components/chatbot/chatbot';

export default withRedux(initStore)(
    class MyApp extends App {
        
        static async getInitialProps ({ Component, ctx }) {
            return {
                pageProps: Component.getInitialProps
                    ? await Component.getInitialProps(ctx)
                    : {}
            }
        }

        render () {
            const { Component, pageProps, store } = this.props

            return (
                <ThemeProvider theme={Themes.default}>
                    <CssBaseline />
                <React.Fragment>
                    <DefaultSeo
                        title="Rival Store"
                        description="Rival Store - Made By ITLAND services"
                        openGraph={{
                            type: 'website',
                            locale: 'en_IE',
                            url: 'https://novine-react.envytheme.com/',
                            site_name: 'RivalStore',
                        }}
                    />
                    <I18nextProvider i18n={i18n}>
                    <Provider store={store}>
                        <Component {...pageProps} />

                        {/* <Button
                          tooltip="The big plus button!"
                            icon="fa fa-plus"
                            rotate={true}
                            onClick={() => alert('FAB Rocks!')} /> */}
                        {/* <ChatBot /> */}
                    </Provider>
                    <GoTop scrollStepInPx="50" delayInMs="10.50" />
                    </I18nextProvider>
                </React.Fragment>
                </ThemeProvider>
            );
        }
    }
)