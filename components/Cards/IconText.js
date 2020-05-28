import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function Testimonial(props) {
  const classes = useStyles();
  const textStyle = useText();
  const {
    icon,
    text,
    desc,
  } = props;
  return (
    <Paper className={classes.iconText}>
      <div className={classes.icon}>
        <span className={icon}>
          <img src={icon} className={classes.imageResizer}/>
        </span>
      </div>
      <div className={classes.more}>
        <Typography className={clsx(classes.name, textStyle.paragraph)} variant="h6" display="block">{text}</Typography>
        <Typography className={clsx(classes.desc, textStyle.paragraph)} display="block">{desc}</Typography>
      </div>
    </Paper>
  );
}

Testimonial.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
