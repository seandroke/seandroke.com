import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingBottom: theme.spacing(2),
    position: 'relative',
    '& > div': {
      [theme.breakpoints.down('md')]: {
        padding: 0,
      }
    }
  },
  props: {
    width: 240,
    height: 240,
    '&:focus': {
      outline: 'none'
    }
  },
  floatingTitle: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      position: 'relative',
       left: theme.spacing(12),
       top: theme.spacing(22),
      width: 240
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3)
    }
  },
  item: {
    padding: theme.spacing(0, 1),
    marginBottom: theme.spacing(),
    '&:focus': {
      outline: 'none'
    }
  },
  CenterButton: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
  nav: {
    position: 'absolute',
    top: '45%',
    width: 36,
    height: 36,
    padding: 0,
    minWidth: 0,
    background: theme.palette.background.default,
    border: 'none',
    boxShadow: 'none',
    zIndex: 3,
    transform: `scale(2.5) ${theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)'}`,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      transform: 'scale(1.2)',
      color: theme.palette.type === 'dark' ? theme.palette.divider : theme.palette.text.primary,
    }
  },
  prev: {
    left: 6,
  },
  next: {
    right: 6,
  },
  itemPropsFirst: {
    '& div': {
      width: theme.direction === 'rtl' ? 400 : 350,
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 500 : 300,
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 350 : 400,
    '& div': {
      [theme.breakpoints.down(1500)]: {
        width: theme.direction === 'rtl' ? 300 : 500,
      }
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  SubInfo: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
  },
  inBetween: {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}));

export default testiStyles;
