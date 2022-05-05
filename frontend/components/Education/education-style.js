import { makeStyles } from '@material-ui/core/styles';
const gold = '#D6BD96';

const educationStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        padding: 0
      },
    }
  },
  about: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        marginTop: theme.spacing(7)
      }
    }
  },
  line: {
    borderTop: 0,
    borderLeft: 0,
    height: 40,
    width: 'calc(100% - 130px)',
    border: '2px solid',
    borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    position: 'relative',
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  reward: {
    flex: 1,
    display: 'flex',
    justifyContent: 'left',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 7, 0, 0),
    },
    [theme.breakpoints.down('xs')]: {
      overflow: 'auto'
    }
  },
  item: {
    width: '100%',
    textAlign: 'center',
    color: 'black',
    margin: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    '& figure': {
      height: 75,
      margin: theme.spacing(0, 0, 2),
      [theme.breakpoints.down('sm')]: {
        height: 50
      },
      '& img': {
        height: '100%',
      },
    },
    '& p': {
      fontFamily: 'Lato,sans-serif',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16
      }
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        //fontSize: 16
      }
    },
  },
  photo: {
    position: 'relative',
    marginTop: -20,
    background: theme.palette.common.white,
    width: 270,
    height: 320,
    [theme.breakpoints.down('sm')]: {
      width: 200,
      minHeight: 200,
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '& figure': {
      margin: 0,
      '& img': {
        width: '100%',
        height: '100%',
        border: '2px solid',
        borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        borderImageSlice: 1,
      }
    }
  },
  frame: {
    position: 'absolute',
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: `${theme.spacing(4)}px auto`,
    maxWidth: 600,
    '& button': {
      margin: theme.spacing(1, 2),
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    '& i': {
      fontSize: 22
    }
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
  },
}));

export default educationStyles;
