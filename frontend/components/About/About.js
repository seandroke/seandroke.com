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
  const { data } = props;

  function calculate_age(birth_month,birth_day,birth_year)
  {
      var today_date = new Date();
      var today_year = today_date.getFullYear();
      var today_month = today_date.getMonth();
      var today_day = today_date.getDate();
      var age = today_year - birth_year;
  
      if ( today_month < (birth_month - 1))
      {
          age--;
      }
      if (((birth_month - 1) == today_month) && (today_day < birth_day))
      {
          age--;
      }
      return age;
  }

  var age = calculate_age(2, 3, 1998);

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
                  {data.bio.map((paragraph, idx) => {
                    return(
                      <p>{paragraph}</p>
                    )
                  })}
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
