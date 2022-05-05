import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const cardsStyles = makeStyles(theme => ({
  iconText: {
    position: 'relative',
    textAlign: 'center',
    padding: theme.spacing(2),
    width: 240,
    height: 200,
    transition: 'all 0.3s ease-out',
    [theme.breakpoints.down(1500)]: {
      width: 200
    },
    '&:hover': {
      background: theme.palette.secondary.main,
      '& $more': {
        bottom: 0,
      },
      '& $name': {
        color: theme.palette.common.white,
        top: 0,
        '&:after': {
          width: 30,
        }
      },
      '& $desc': {
        top: 0,
        opacity: 1,
      },
      '& $icon': {
        transform: 'scale(0.5)',
        opacity: 0,
      }
    }
  },
  icon: {
    marginBottom: theme.spacing(2),
    transition: 'all 0.3s ease-out',
    '& span': {
      '&:before': {
        fontSize: 130,
        background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    }
  },
  imageResizer: {
    marginTop: theme.spacing(5),
    width: '100%',
    height: 'auto',
  },
  more: {
    position: 'absolute',
    bottom: 90,
    width: '100%',
    padding: theme.spacing(3),
    left: 0,
    height: 200,
    transition: 'all 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    transition: 'all 0.3s ease-out',
    marginBottom: theme.spacing(4),
    top: 0,
    position: 'relative',
    '&:after': {
      content: '""',
      width: 0,
      transition: 'all 0.5s ease-out',
      display: 'block',
      position: 'relative',
      margin: '0 auto',
      top: theme.spacing(1),
      borderTop: '2px solid #FFF',
    }
  },
  desc: {
    top: 60,
    position: 'relative',
    opacity: 0,
    transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    color: theme.palette.common.white,
  },
  figure: {},
  img: {},
  imgThumb: {
    border: `8px solid ${theme.palette.background.paper}`,
    position: 'relative',
    '& $figure': {
      height: '100%',
      width: '100%',
      position: 'relative',
      margin: 0,
      overflow: 'hidden',
      '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
      '&:after': {
        content: '""',
        position: 'absolute',
        bottom: -80,
        left: -100,
        opacity: 0.8,
        width: 160,
        height: 160,
        transform: 'rotate(-35deg)',
        backgroundImage: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`
      },
    },
    '& $img': {
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      transform: 'scale(1.1)',
      transition: 'transform 0.2s ease-out',
    },
    '&:before': {
      content: '""',
      left: -13,
      bottom: -12,
      width: '30%',
      height: '100%',
      border: '4px solid',
      borderImageSource: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      position: 'absolute',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    '&:hover': {
      '& $img': {
        transform: 'scale(1)'
      },
      '& $detail': {
        opacity: 1,
        backgroundPosition: '60% 0',
        '& h6, & a': {
          transform: 'translate(0, 0)',
        }
      }
    }
  },
  detail: {
    position: 'absolute',
    transition: 'opacity 0.3s ease-out, background-position 3s ease-out',
    width: '100%',
    height: '100%',
    bottom: 0,
    opacity: 0,
    background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${fade(theme.palette.primary.main, 0.55)})`,
    backgroundSize: '300%',
    backgroundPosition: '0% 0',
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& > *': {
      transition: 'all 0.4s ease-out'
    },
    '& h6': {
      position: 'relative',
      transform: 'translate(0, 10px)',
      marginBottom: theme.spacing(3),
      lineHeight: '36px'
    },
    '& a': {
      fontSize: 18,
      textDecoration: 'underline',
      color: theme.palette.common.white,
      position: 'relative',
      transform: 'translate(0, 30px)',
    },
  },
  short: {
    height: 240,
    [theme.breakpoints.down('md')]: {
      height: 210
    },
    '& $img': {
      width: '100%'
    },
    '&:before': {
      width: 80,
      height: 80
    },
  },
  medium: {
    height: 320,
    [theme.breakpoints.down('xs')]: {
      height: 210
    },
    '& $img': {
      width: '100%'
    }
  },
  long: {
    height: 480,
    [theme.breakpoints.down('xs')]: {
      height: 210
    },
    '& $img': {
      height: '100%'
    },
    '&:before': {
      width: 190,
      height: 260
    },
    '& $figure': {
      '&:after': {
        width: 300,
        height: 300,
        left: -200,
        bottom: -120,
      }
    }
  },
  post: {
    height: 380,
    width: 256,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 12
    },
    '& figure': {
      margin: 0,
      width: '100%',
      height: 140,
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  text: {
    height: 200,
    padding: theme.spacing(3),
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(),
    },
    '& p': {
      color: theme.palette.text.secondary,
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical'
    }
  },
  readmore: {
    '& span': {
      fontWeight: theme.typography.fontWeightRegular
    },
    margin: theme.spacing(0, 3),
    lineHeight: '16px !important',
    borderLeft: `3px solid ${theme.palette.primary.main}`
  },
  textReadmore: {
    padding: '0px 8px !important',
  }
}));

export default cardsStyles;
