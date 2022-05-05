import { makeStyles } from '@material-ui/core/styles';

const aboutStyles = makeStyles(theme => ({
  counterWrap: {
    width: '100%',
    backgroundImage: `linear-gradient(90deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    padding: theme.spacing(7, 0)
  },
  text: {
    display: 'flex',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    }
  },
  counterItem: {
    width: '100%',
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
    },
    '& i': {
      marginRight: theme.spacing(2),
      color: theme.palette.common.white,
      fontSize: 40,
      lineHeight: '40px'
    }
  }
}));

export default aboutStyles;
