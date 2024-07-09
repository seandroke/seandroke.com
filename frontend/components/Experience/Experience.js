import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import ReactWOW from 'react-wow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { useText } from '../../theme/common';
import useStyles from './experience-style';
import brand from '../../static/text/brand';
import Slider from 'react-slick';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import JobEntry from './JobEntry';
import {getSection} from '../../util/APIUtils';





function Experience(props) {

  const classes = useStyles();

  const text = useText();

  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  // const [data, setData] = React.useState(null)
  const { data } = props;

  // useEffect(() => {
  //   let res = getSection("experience").then(response => {
  //     setData(response);
  //   });
  // })


  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [play, setPlay] = useState(false);



  const handlePlay = () => {

    setTimeout(() => { setPlay(true); }, 200);

  };



  const handleClick = event => {

    setAnchorEl(event.currentTarget);

  };



  const handleClose = () => {

    setAnchorEl(null);

  };



  var rightMargin = {

    marginRight: '10px',

  };



  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;



  var settings = {

    dots: true,

    infinite: false,

    arrows: false

  };



  return (

    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.profile.name}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={clsx(classes.title, text.subtitle)}>
                  Work Experience
                </Typography>
                <ul style={{paddingTop: '10%'}}>
                {data.workExperience.map((exp, index) => {
                return(
                  <li>
                      <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
                        <div>
                          <Typography variant="h3" gutterBottom className={text.subtitle2}>{exp.title}</Typography>
                          <Typography gutterBottom>{exp.company}<br/><i>{exp.location}</i></Typography>
                          <Typography className={classes.time}>{exp.tenure}</Typography>
                        </div>
                      </ReactWOW>
                  </li>
                )
                })}
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" style={{textAlign: 'center'}} className={clsx(classes.title, text.subtitle)}>
                  Skill And Expertise
                </Typography>
                <ReactWOW animation="fadeIn" delay="0.4s" duration="0.3s" callback={handlePlay}>
                  <ul>
                  <Slider {...settings}>
                  <div className={classes.mainList}>
                  <Typography variant="h4" className={classes.category}>Languages</Typography>
                    {data.languages.map((language, idx) => {
                      return(
                        <li className={classes.subList}>
                          <div className={classes.textIcon1}>
                          <img src={language.logo} className={classes.customTimelineLogo}/>
                            <Typography variant="h6" className={text.subtitle2}>
                              {language.language}
                            </Typography>
                          </div>
                          <LinearProgress
                            variant="determinate"
                            value={play ? language.proficiency : 0}
                            classes={{
                              root: classes.progressBg,
                              bar: classes.bar
                            }}
                          />
                      </li>
                      )
                    })}
                    <li></li>
                  </div>
                  <div className={classes.mainList}>
                  <Typography variant="h4" className={classes.category}>Web Frameworks</Typography>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Back End</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.webFrameworks.backend.map((framework, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar style={{}} alt="Natacha" src={framework.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {framework.technology}
                              variant="outlined"
    
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Front End</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.webFrameworks.frontend.map((framework, idx) => {
                          return (
                            <Chip
                              justify="center"
                              avatar={<Avatar alt="Natacha" src={framework.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {framework.technology}s
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>CSS</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.webFrameworks.css.map((framework, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar alt="Natacha" src={framework.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {framework.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li></li>
                  </div>
                  <div className={classes.mainList}>
                  <Typography variant="h4" className={classes.category}>Data Engineering</Typography>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>SQL</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.dataEngineering.sql.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar style={{}} alt="Natacha" src={syntax.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {syntax.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Big Data</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.dataEngineering.bigData.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar alt="Natacha" src={syntax.logo} />}    
                              style={{fontSize: '20px', fontWeight: '700'}}     
                              label = {syntax.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>NoSQL</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.dataEngineering.noSql.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar alt="Natacha" src={syntax.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {syntax.technology}
                              variant="outlined"    
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li></li>
                  </div>
                  <div className={classes.mainList}>
                  <Typography variant="h4" className={classes.category}>Cloud Technologies</Typography>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Amazon Web Services</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.cloudProviders.aws.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar style={{}} alt="Natacha" src={syntax.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {syntax.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Microsoft Azure</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.cloudProviders.azure.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar alt="Natacha" src={syntax.logo} />}    
                              style={{fontSize: '20px', fontWeight: '700'}}     
                              label = {syntax.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Google Cloud</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.cloudProviders.gcp.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar alt="Natacha" src={syntax.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {syntax.technology}
                              variant="outlined"    
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li></li>
                  </div>
                  <div className={classes.mainList}>
                  <Typography variant="h4" className={classes.category}>DevOps</Typography>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Containerization</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.devOps.containerization.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar style={{}} alt="Natacha" src={syntax.logo} />}
                              style={{fontSize: '20px', fontWeight: '700'}}
                              label = {syntax.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>CI/CD</Typography>
                      <div style={{textAlign: 'center'}}>
                        {data.devOps.cicd.map((syntax, idx) => {
                          return (
                            <Chip
                              avatar={<Avatar alt="Natacha" src={syntax.logo} />}    
                              style={{fontSize: '20px', fontWeight: '700'}}     
                              label = {syntax.technology}
                              variant="outlined"
                            />
                          )
                        })}
                      </div>
                      </div>
                      </div>
                    </li>
                    <li></li>
                  </div>
                  </Slider>
                  </ul>
                </ReactWOW>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Experience.propTypes = {

};

export default Experience;


