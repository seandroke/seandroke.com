
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const bannerStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(10),
      '& > div': {
        padding: 0
      }
    }
  },
  cover: {
    position: 'absolute',
    clip: 'rect(auto,auto, auto, auto)',
    top: 0,
    left: 0,
    height: '100%',
    width: 1080,
    overflow: 'hidden',
  },
  globe: {
    height: '99%',
    width: '100%',
    bottom: '20%',
    left: '0%',
    position: 'fixed',
    [theme.breakpoints.down('md')]: {
      height: '99%',
      width: '100%',
      bottom: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      left: '0%'
    }
  },
  figure: {
    display: 'block',
    width: '100%',
    height: '100%',
    '& img': {
      position: 'fixed',
      [theme.breakpoints.down('xs')]: {
        left: '-50%'
      }
    }
  },
  overlay: {
    backgroundImage: `linear-gradient(120deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main})`,
    opacity: 0.5,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  banner: {
    position: 'relative',
    padding: theme.spacing(10, 3, 0),
    color: theme.palette.common.white,
    height: 500,
    [theme.breakpoints.down('sm')]: {
      height: 420
    },
    [theme.breakpoints.down('xs')]: {
      height: 400
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(10),
    },
    '& h4': {
      fontFamily: 'Times New Roman',
    },
  },
  text: {
    position: 'relative',
    maxWidth: 605,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4, & h2, & h5': {
      marginBottom: theme.spacing(3)
    }
  },
  socmed: {
    marginBottom: theme.spacing(3),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      width: 36,
      height: 36,
      '& i': {
        color: fade(theme.palette.common.white, 0.75),
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  bar: {},
  settingIcon: {
    position: 'absolute',
    top: theme.spacing(10),
    right: theme.spacing(10),
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  mobileMenu: {
    marginRight: theme.spacing(),
    '& $bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary,
      }
    }
  },
  mobileNav: {
    width: 240,
    background: theme.palette.background.default,
    padding: theme.spacing(10, 2, 4)
  },
  menuList: {
    textTransform: 'capitalize'
  }
}));

export default bannerStyles;