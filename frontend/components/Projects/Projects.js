import React, { useRef, useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useText } from '../../theme/common';
import Title from '../Title';
import IconTextCard from '../Cards/IconText';
import useStyle from './projects-style';
import Button from '@material-ui/core/Button';



function Projects(props) {
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { data } = props;
  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  const [toggler, setToggler] = useState(false);
  const [renderContent, setRenderContent] = useState(null);

  let detailedWork = null;

  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(services.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  if(toggler) {
    detailedWork = (<div className={classes.SubInfo}>{renderContent.map((item, index) => (
    <div>
      <h3 style={{paddingTop: '5%'}} className={text.subtitle2}><b>Project Name: <i>{item.name}</i></b></h3>
      <p className={text.paragraph}>{item.description}</p>
    </div>))}</div>)

  }

  return (
    <div className={classes.root}>
      <div className={classes.inBetween}>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>
            Projects
          </strong>
        </Title>
        <Typography className={text.paragraph}>
          An overview of what I have accomplished at these great organizations.
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={clsx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {data.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <div>
                <IconTextCard
                  icon={item.logo}
                  text={item.company}
                  desc={item.title}
                />
                </div>
                <div className={classes.CenterButton}>
                  <Button onClick={() =>{setToggler(!toggler); setRenderContent(item.projects);}}>Read More</Button>
                </div>
              </div>
            ))}
            {isDesktop && (
              <div className={clsx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={clsx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
      <div>
        {detailedWork}
      </div>
      </div>
    </div>
  );
}

Projects.propTypes = {

};

export default Projects;


