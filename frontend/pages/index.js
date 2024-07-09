import React, {useLayoutEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from '../components/Header';
import BannerNav from '../components/BannerNav';
import Education from '../components/Education';
import Experience from '../components/Experience';
import About from '../components/About';
import Projects from '../components/Projects';
import Location from '../components/Location';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Decoration from '../components/Parallax/Decoration';
import { getAttributes } from '../util/APIUtils';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.dark : theme.palette.background.paper,
  },
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  },
  education: {
    '&::before': {
      height: '700px',
      content: '""',
      display: 'none'
    }
  }
}));

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir, data } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          Sean Droke
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <section id="home">
          <BannerNav
            onToggleDark={onToggleDark}
            onToggleDir={onToggleDir}
            data={data['bannerNav']}
          />
        </section>
        <section className={classes.education} id="education">
          <Education data={data['education']}/>
        </section>
        <section id="experience">
          <Experience data={data['experience']}/>
{/*}         <section id="my-work" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
              <Gallery />
            </section>
  */}
        </section>
        <section id="projects">
          <Projects data={data.projects}/>
        </section>
        <div className={classes.greyBg}>
          <div className={classes.parallaxWrap}>
            <section id="about">
            <About data={data['aboutMe']}/>
            </section>
            <Decoration />
          </div>
          <section id="location">
            <Location data={data.location}/>
          </section>
          <div className={classes.parallaxWrap}>
            <div className={classes.bottomDeco}>
              <Decoration />
            </div>
{/*            <section id="blog" className={classes.spaceTopShort}>
              <Blog />
            </section>
*/}
            <section id="contact" className={classes.spaceTop}>
              <Footer />
            </section>
          </div>
        </div>
        <Hidden smDown>
          <PageNav />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'profile-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
