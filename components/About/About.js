import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import useStyles from './about-style';

function About(props) {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 500);
  };
  return (
    <div className={classes.counterWrap}>
      <Container>
        <Grid container className={classes.root} spacing={6}>
          <Grid item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography style={{textAlign: 'center'}} variant="h4" className={text.title2}>
                    About Me:
                  </Typography>
                </div>
                <Typography variant="h6" className={text.subtitle2}>
                  I am 22 years old, born and raised in the Greater Philadelphia Area. For the majority of my life, I have called
                  Medford, New Jersey home. I am the eldest of three boys, born of two math teachers, yet I was always partial to the
                  sciences.<br/><br/>I'm known to always be looking for a different way to solve something, and not stopping until I find an
                  answer to the problems I face. I have always been fascinated with computers, and I can't think of a career with more
                  new and exciting problems than that which I have found in Computer Science. I am endlessly eager to learn that which I don't
                  know and love to meet and collaborate with new faces along the way.<br/><br/>Outside of that, I am well known for falling 
                  down deep YouTube rabit holes to satisfy my ever growing curiosity, and I love to embrace my creativity with
                  personal projects just like this site! I enjoy spending quality time with friends and loved ones, and of course,
                  watching my fair share of the Eagles, regardless of how upset they might make me!
                </Typography>
              </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(About);
