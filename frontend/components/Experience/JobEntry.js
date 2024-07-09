import React from 'react';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import { useText } from '../../theme/common';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './experience-style';

function JobEntry(props) {

    const classes = useStyles();

    const text = useText();

    const theme = useTheme();
    return (
    <li>
        <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
          <div>
            <Typography variant="h3" gutterBottom className={text.subtitle2}>Software Engineer</Typography>
            <Typography gutterBottom>Penn National Gaming<br/><i>Wyomissing, PA</i></Typography>
            <Typography className={classes.time}>April 2021 - Present</Typography>
          </div>
        </ReactWOW>
    </li>
    )

}

export default JobEntry;