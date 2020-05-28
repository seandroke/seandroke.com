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
import { useText } from '~/theme/common';
import useStyles from './experience-style';
import brand from '~/static/text/brand';
import CPP from '~/static/images/cpp_logo.png';
import PHP from '~/static/images/php.png';
import JAVA from '~/static/images/java.png';
import DJANGO from '~/static/images/django.png';
import SPRING from '~/static/images/spring.png';
import REACT from '~/static/images/react.png';
import BOOTSTRAP from '~/static/images/bootstrap.png';
import MUI from '~/static/images/mui.png';
import MYSQL from '~/static/images/mysql.png';
import MSSQL from '~/static/images/mssql.png';
import HIVE from '~/static/images/hive.png';
import SPARK from '~/static/images/spark.png';
import HADOOP from '~/static/images/hadoop.png';
import MONGO from '~/static/images/mongo.png';
import Slider from 'react-slick';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


function Experience(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
                <li>
                    <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Full Stack Software Engineer</Typography>
                        <Typography gutterBottom>Comcast<br/><i>Philadelphia, PA</i></Typography>
                        <Typography className={classes.time}>February 2020 - Present</Typography>
                      </div>
                    </ReactWOW>
                </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Full Stack Web Developer</Typography>
                        <Typography gutterBottom>Tierney Communications<br/><i>Philadelphia, PA</i></Typography>
                        <Typography className={classes.time}>August 2019 - February 2020</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={100} delay="0.3s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Network &amp; Automation Engineer</Typography>
                        <Typography gutterBottom>Comcast<br/><i>West Chester, PA</i></Typography>
                        <Typography className={classes.time}>May 2019 - August 2019</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={200} delay="0.4s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Software Engineering Intern</Typography>
                        <Typography gutterBottom>The Interpublic Group<br/><i>New York City, NY</i></Typography>
                        <Typography className={classes.time}>October 2018 - March 2019</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={300} delay="0.5s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Systems Administration Intern</Typography>
                        <Typography gutterBottom>Tierney Communications<br/><i>Philadelphia, PA</i></Typography>
                        <Typography className={classes.time}>June 2018 - October 2018</Typography>
                      </div>
                    </ReactWOW>
                  </li>
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
                    <li className={classes.subList}>
                      <div className={classes.textIcon1}>
                        <i style={rightMargin} className="ion-social-python" />
                        <Typography variant="h6" className={text.subtitle2}>
                          Python
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 85 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon1}>
                        <img src={JAVA} className={classes.customTimelineLogoJava}/>
                        <Typography variant="h6" className={text.subtitle2}>Java</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 75 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon1}>
                        <i style={rightMargin} className="ion-social-javascript" />
                        <Typography variant="h6" className={text.subtitle2}>
                          JavaScript
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 65 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon1}>
                        <img src={CPP} className={classes.customTimelineLogo}/>
                        <Typography variant="h6" className={text.subtitle2}>C/C++</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 65 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon1}>
                        <img src={PHP} className={classes.customTimelineLogo}/>
                        <Typography variant="h6" className={text.subtitle2}>
                          PHP
                        </Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 55 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li></li>
                  </div>
                  <div className={classes.mainList}>
                  <Typography variant="h4" className={classes.category}>Web Frameworks</Typography>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Back End</Typography>
                      <div style={{textAlign: 'center'}}>
                      <Chip
                        avatar={<Avatar style={{}} alt="Natacha" src={DJANGO} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Django"
                        variant="outlined"
                        />
                      <Chip
                        avatar={<Avatar alt="Natacha" src={SPRING} />}
                        style={{textAlign: 'center', fontSize: '20px', fontWeight: '700'}}
                        label = "Spring Boot"
                        variant="outlined"
                        />
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Front End</Typography>
                      <div style={{textAlign: 'center'}}>
                      <Chip
                        justify="center"
                        avatar={<Avatar alt="Natacha" src={REACT} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "React"
                        variant="outlined"
                        />
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>CSS</Typography>
                      <div style={{textAlign: 'center'}}>
                      <Chip
                        avatar={<Avatar alt="Natacha" src={BOOTSTRAP} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Bootstrap"
                        variant="outlined"
                        />
                      <Chip
                        avatar={<Avatar alt="Natacha" src={MUI} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Material UI"
                        variant="outlined"
                        />
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
                      <Chip
                        avatar={<Avatar style={{}} alt="Natacha" src={MYSQL} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "MySQL"
                        variant="outlined"
                        />
                      <Chip
                        avatar={<Avatar alt="Natacha" src={MSSQL} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Microsoft SQL"
                        variant="outlined"
                        />
                      <Chip
                        avatar={<Avatar alt="Natacha" src={HIVE} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Hive SQL"
                        variant="outlined"
                        />
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>Big Data</Typography>
                      <div style={{textAlign: 'center'}}>
                      <Chip
                        avatar={<Avatar alt="Natacha" src={SPARK} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Spark"
                        variant="outlined"
                        />
                        <Chip
                        avatar={<Avatar alt="Natacha" src={HADOOP} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "Hadoop"
                        variant="outlined"
                        />
                      </div>
                      </div>
                      </div>
                    </li>
                    <li className={classes.subList}>
                      <div className={classes.textIcon}>
                      <div style={{display: 'block'}}>
                      <Typography variant="h3" style={{fontWeight: '700'}} gutterBottom className={text.subtitle2}>NoSQL</Typography>
                      <div style={{textAlign: 'center'}}>
                      <Chip
                        avatar={<Avatar alt="Natacha" src={MONGO} />}
                        style={{fontSize: '20px', fontWeight: '700'}}
                        label = "MongoDB"
                        variant="outlined"
                        />
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
