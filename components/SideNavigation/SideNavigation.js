import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import logo from '/home/bitnami/projects/seandroke.com/static/images/profile-logo.png';
import { withTranslation } from '/home/bitnami/projects/seandroke.com/i18n';
import useStyles from './sidenav-style';
import navMenu from './menu';
import '/home/bitnami/projects/seandroke.com/vendors/hamburger-menu.css';

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

function SideNavigation(props) {
  const classes = useStyles();
  const { t } = props;
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 0),
    createData(navMenu[1], '#' + navMenu[1], 80),
    createData(navMenu[2], '#' + navMenu[2], -250),
    createData(navMenu[3], '#' + navMenu[3]),
    createData(navMenu[4], '#' + navMenu[4]),
    createData(navMenu[5], '#' + navMenu[5]),
    createData(navMenu[6], '#' + navMenu[6]),
  ]);
  return (
    <div className={classes.navigation}>
      <Container fixed>
        <nav className={classes.navMenu}>
          <AnchorLink href="#home" className={classes.logo}>
            <img src={logo} alt="logo" />
          </AnchorLink>
          <List component="nav" className={classes.menu}>
            <Scrollspy
              items={navMenu}
              currentClassName="active"
            >
              {menuList.map(item => (
                <ListItem
                  key={item.id.toString()}
                  button
                  component={AnchorLink}
                  offset={item.offset || 0}
                  href={item.url}
                  classes={{ root: classes.link }}
                >
                  <ListItemText
                    classes={{ root: classes.text }}
                    primary={t('profile-landing:header_' + item.name)}
                  />
                </ListItem>
              ))}
            </Scrollspy>
          </List>
        </nav>
      </Container>
    </div>
  );
}

SideNavigation.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(SideNavigation);
