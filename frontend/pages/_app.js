import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PageTransition } from 'next-page-transitions';
import Loading from 'react-loading-bar';
import { i18n, appWithTranslation } from '../i18n';
import appTheme from '../theme/appTheme';
import { getAttributes } from '../util/APIUtils';
/* import css vendors */
import '../node_modules/react-loading-bar/dist/index.css';
import '../node_modules/animate.css/animate.css';
import '../vendors/animate-extends.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

class MyApp extends App {
  state = {
    loading: true,
    theme: {
      ...appTheme('violet', themeType),
      direction: i18n.language === 'ar' ? 'rtl' : 'ltr'
    },
    data: null,
    pageLoad: true
  }

  componentDidMount() {
    // Set layout direction
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    // Remove loading bar
    this.setState({ loading: true });
    setTimeout(() => { this.setState({ loading: false }); }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    let res = getAttributes().then(res => {
      this.setState({data: res});
      this.setState({pageLoad: false})}, [])
  }

  toggleDarkTheme = () => {
    const { theme } = this.state;
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    this.setState({
      theme: {
        ...appTheme('violet', newPaletteType),
        direction: theme.direction,
      }
    });
  }

  toggleDirection = dir => {
    const { theme } = this.state;
    document.dir = dir;
    this.setState({
      theme: {
        ...theme,
        direction: dir,
        palette: {
          ...theme.palette
        }
      }
    });
  }

  render() {
    const { theme, loading, data, pageLoad } = this.state;
    const muiTheme = createMuiTheme(theme);
    const { Component, pageProps, router } = this.props; // eslint-disable-line
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    if(!pageLoad){
        // Remove preloader
      const preloader = document.getElementById('preloader');
      if (preloader !== null || undefined) {
        preloader.remove();
      }
    }
    return (
      <Container>
        <StylesProvider jss={jss}>
          <MuiThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Loading
              show={loading}
              color={theme.palette.primary.main}
              showSpinner={false}
            />
            {this.state.data && (
              <div id="main-wrap">
              <PageTransition timeout={400} classNames="page-fadeUp-transition">
                <Component
                  {...pageProps}
                  {...this.state}
                  onToggleDark={this.toggleDarkTheme}
                  onToggleDir={this.toggleDirection}
                  key={router.route}
                />
              </PageTransition>
            </div>
            )}
          </MuiThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

export default appWithTranslation(MyApp);
