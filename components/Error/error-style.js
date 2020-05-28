import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  errorWrap: {
    width: '100%',
    height: '100%',
    minHeight: 800,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    overflow: 'hidden',
    marginBottom: theme.spacing(-15)
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5)
    },
    '& h3': {
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      color: theme.palette.common.white,
      fontFamily: 'Times New Roman',
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      borderBottom: `290px solid ${theme.palette.primary.main}`,
      borderLeft: '180px solid transparent',
      borderRight: '180px solid transparent',
      position: 'absolute',
      bottom: -20,
      left: -170,
    },
    '&:after': {
      content: '""',
      borderBottom: `240px solid ${theme.palette.secondary.main}`,
      borderLeft: '130px solid transparent',
      borderRight: '130px solid transparent',
      position: 'absolute',
      bottom: -20,
      right: -130
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& p': {
      fontSize: 22,
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

export default useStyles;
