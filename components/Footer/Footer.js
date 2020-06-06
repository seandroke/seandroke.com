import React from 'react';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import logo from '../../static/images/profile-logo.png';
import { useText } from '../../theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';

function Footer(props) {
  const classes = useStyles();
  const text = useText();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <div className={classes.decoration} style={{ display: 'none' }}>
        <svg
          fill="#cccccc"
          width={845}
          height={1099}
          className={classes.parallaxDot}
        >
          <use xlinkHref="/static/images/decoration/dot-deco.svg#dot" />
        </svg>
      </div>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h3" className={text.title}>
                Sean Droke
              </Typography>
              <Typography variant="h4" className={text.subtitle}>
                <nobr>Full Stack</nobr><br></br><nobr>Software Engineer</nobr>
              </Typography>
            </div>
            <div className={classes.socmed}>
              <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => window.open('https://www.linkedin.com/in/seandroke/', "_blank")}>
                <i className="ion-social-linkedin" />
              </IconButton>
              <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => window.open('https://www.instagram.com/seandroke/?hl=en', "_blank")}>
                <i className="ion-social-instagram" />
              </IconButton>
              <IconButton aria-label="Delete" className={classes.margin} size="small" onClick={() => window.open('https://github.com/seandroke/', "_blank")}>
                <i className="ion-social-github" />
              </IconButton>
            </div>
            <div className={classes.contact}>
              <Typography className={text.paragraph}>
                My Personal Line
                <br />
                +1 609 500 3961
              </Typography>
              <Divider className={classes.divider} />
              <Typography className={text.paragraph}>
                Email Me!
                <br />
                sean.droke@temple.edu
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Footer.propTypes = {
};

export default Footer;
