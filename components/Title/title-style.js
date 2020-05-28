import { makeStyles } from '@material-ui/core/styles';
import titleDecoLight from '~/static/images/profile/titleDecoLight.png';
import titleDecoDark from '~/static/images/profile/titleDecoDark.png';

const titleStyles = makeStyles(theme => ({
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(3),
    textAlign: 'center',
    height: theme.spacing(8),
    padding: theme.spacing(2, 0),
    '& h4': {
      color: theme.palette.text.primary,
      verticalAlign: 'middle',
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'capitalize',
      fontSize: 36,
      lineHeight: '56px',
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
        lineHeight: '36px',
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold,
      }
    },
    '&$dark': {
      '& h4': {
        color: theme.palette.common.white,
      }
    }
  }
}));

export default titleStyles;
