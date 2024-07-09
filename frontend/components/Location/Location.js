import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import Carousel from 'react-slick';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useText } from '../../theme/common';
import testiData from './locationData';
import Title from '../Title';
import useStyle from './location-style';
import pin from '../../static/images/icons8-map-pin-48.png';

function AvatarBuble(props) {
  const classes = useStyle();
  const {
    avatar, name,
    x, y,
    openPopover, closePopover
  } = props;
  return (
    <div className={classes.person} style={{ left: x, top: y }}>
      {avatar ? (
        <Avatar
          alt={name}
          src={avatar}
          className={classes.avatar}
          onMouseEnter={(e) => openPopover(e)}
          onMouseLeave={closePopover}
        />
      ) : (
        <span
          className={classes.dot}
          onMouseEnter={(e) => openPopover(e)}
          onMouseLeave={closePopover}
        />
      )}
    </div>
  );
}

AvatarBuble.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.image,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  openPopover: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
};

AvatarBuble.defaultProps = {
  avatar: ''
};

function Location(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupData, setPopupData] = useState({});
  const classes = useStyle();
  const text = useText();
  const open = Boolean(anchorEl);
  const { data } = props;

  const firsthChar = txt => txt.charAt(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  function handlePopoverOpen(event, item) {
    setAnchorEl(event.currentTarget);
    setPopupData(item);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
      >
        <div className={classes.paperBlock}>
        <Typography variant="h6">
            {popupData.location}
          </Typography>
          <Typography className={classes.title}>
            Present
          </Typography>
          <Typography gutterBottom display="block">
            {popupData.description}
          </Typography>
          <img src={popupData.img} className={classes.CardImage}/>
        </div>
      </Popover>
      <Container>
        <Title dark>
          Where
          &nbsp;
          <strong>
            Am I?
          </strong>
        </Title>
        <Grid container>
          <Grid item md={7} xs={12}>
            <div className={classes.worldMap}>
              <Hidden xsDown>
                <div className={classes.avatarWrap}>
                <AvatarBuble
                      key={"1"}
                      avatar={pin}
                      name={data.location}
                      x={data.x}
                      y={data.y}
                      openPopover={(e) => handlePopoverOpen(e, data)}
                      closePopover={handlePopoverClose}
                    />
                </div>
              </Hidden>
              <Hidden smUp>
                <Carousel {...settings}>
                <div
                      className={classes.itemCarousel}
                      key={"2"}
                    >
                      <Paper className={classes.card}>
                      <div className={classes.name}>
                          <Avatar alt={"present"} src={pin} className={classes.avatar} />
                          <Typography variant="caption">
                            {data.location}
                          </Typography>
                        </div>
                        <Typography variant="body1" display="block">
                          {data.description}
                        </Typography>
                        <img src={data.img} className={classes.CardImage}/>
                      </Paper>
                    </div>
                </Carousel>
              </Hidden>
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.text}>
              <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.2s" duration="0.3s">
                <Typography
                  variant="h3"
                  className={clsx(classes.titleSerif, text.title2)}
                >
                  Let's work together.
                </Typography>
              </ReactWOW>
              <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.3s" duration="0.3s">
                <div>
                  <Typography component="p" className={text.paragraph}>
                    <i>Current Availability: </i><b>{data.availability}</b>
                    <br></br>
                    <br></br>
                    {data.status}
                  </Typography>
                  <Button color="secondary" target="None" href="https://www.linkedin.com/in/seandroke/" size="large" className={classes.button} variant="contained">
                    Hire Me
                  </Button>
                </div>
              </ReactWOW>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Location.propTypes = {
};

export default Location;
