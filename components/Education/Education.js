import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import brand from '/home/bitnami/projects/seandroke.com/static/text/brand';
import { useText } from '/home/bitnami/projects/seandroke.com/theme/common';
import useStyles from './education-style';

function Education(props) {
  const theme = useTheme();
  const classes = useStyles();
  const text = useText();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.root}>
      <Container maxWidth={isMobile ? 'sm' : 'lg'}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12} />
          <Grid item lg={9} xs={12}>
            <div className={classes.about}>
              <div className={classes.reward}>
                <div className={classes.item}>
                  <Typography variant="h5" className={clsx(classes.title, text.subtitle)}>EDUCATION</Typography>
                  <figure>
                    <img src="/static/images/profile/education-logo.png" alt="badge" />
                  </figure>
                  <Typography variant="p" className={text.subtitle}>BS, Computer Science</Typography>
                  <br />
                  <Typography variant="p" className={text.subtitle}>2017-2020</Typography>
                </div>
              </div>
              <Hidden mdUp>
                <div className={classes.socmed}>
                  <IconButton onClick={() => window.open('https://www.instagram.com/seandroke/?hl=en', "_blank")} aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-instagram" />
                  </IconButton>
                  <IconButton onClick={() => window.open('https://www.linkedin.com/in/seandroke/', "_blank")} aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-linkedin" />
                  </IconButton>
                  <IconButton onClick={() => window.open('https://github.com/seandroke', "_blank")} aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-social-github" />
                  </IconButton>
                </div>
                <Typography variant="h5">
                I love to solve new and exciting problems. I am a passionate engineer, creator, and thinker. I am endlessly curious and constantly seeking a new way to do things.
                </Typography>
              </Hidden>
              <Paper className={classes.photo}>
                <figure>
                  <img src={brand.profile.avatar} alt="avatar" />
                </figure>
                <span className={classes.frame} />
              </Paper>
            </div>
            <div className={classes.line} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Education.propTypes = {
  t: PropTypes.func.isRequired
};

export default Education;
