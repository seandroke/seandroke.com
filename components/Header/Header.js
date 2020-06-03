import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from '@material-ui/core/Fade';
import { withTranslation } from '/home/bitnami/projects/seandroke.com/i18n';
import logo from '/home/bitnami/projects/seandroke.com/static/images/profile-logo.png';
import routeLink from '/home/bitnami/projects/seandroke.com/static/text/link';
import '/home/bitnami/projects/seandroke.com/vendors/hamburger-menu.css';
import useStyles from './header-style';
import navMenu from '../SideNavigation/menu';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const classes = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 0),
    createData(navMenu[1], '#' + navMenu[1], 150),
    createData(navMenu[2], '#' + navMenu[2], 50),
    createData(navMenu[3], '#' + navMenu[3], 100),
    createData(navMenu[4], '#' + navMenu[4], 80),
    createData(navMenu[5], '#' + navMenu[5], 80),
    createData(navMenu[6], '#' + navMenu[6], 10),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Fragment>
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          invert || fixed || isMobile ? classes.fixed : '',
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={clsx(classes.navLogo, invert && classes.invert)}>
              <IconButton
                onClick={handleOpenDrawer}
                className={clsx('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')}
              >
                <span className="hamburger-box">
                  <span className={clsx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
              <div className={classes.logo}>
                {invert ? (
                  <Link href={routeLink.profile.home}>
                    <a>
                      <img src={logo} alt="logo" />
                    </a>
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                  </AnchorLink>
                )}
              </div>
            </nav>
          </div>
        </Container>
      </AppBar>
      <Fade in={openDrawer}>
        <div className={clsx(classes.paperNav, openDrawer && classes.show)}>
          <div className={classes.mobileNav}>
            {openDrawer && (
              <ul className={classes.menu}>
                {menuList.map((item, index) => (
                  <li key={item.id.toString()} style={{ animationDuration: index * 0.15 + 's' }}>
                    {invert ? (
                      // eslint-disable-next-line
                      <Button href={'/' + item.url}>
                        {t('profile-landing:header_' + item.name)}
                      </Button>
                    ) : (
                      // eslint-disable-next-line
                      <Button component={AnchorLink} onClick={handleCloseDrawer} offset={item.offset || 0} href={item.url}>
                        {t('profile-landing:header_' + item.name)}
                      </Button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  t: PropTypes.func.isRequired
};

Header.defaultProps = {
  invert: false
};

export default withTranslation(['profile-landing'])(Header);
