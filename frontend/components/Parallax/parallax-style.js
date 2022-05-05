import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    top: 0,
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& figure > div': {
      height: 1000,
      width: '100%',
      position: 'relative',
      top: 500,
    }
  },
  bannerParallaxWrap: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& figure > div': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      top: 0,
    }
  },
  parallaxVertical: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(0.5)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
  },
  parallaxDot: {
    top: -20,
    fill: theme.palette.text.hint,
    width: 845,
    height: 1099,
    opacity: 0.2,
    left: 200
  },
  parallaxTriangle: {
    top: 300,
    outline: theme.palette.text.hint,
    opacity: 0.1,
    width: 902,
    height: 1042,
    stroke: theme.palette.text.hint,
    fill: 'transparent',
    strokeWidth: 50,
    right: -100
  },
  parallaxCircle: {
    top: 250,
    width: 600,
    height: 570,
    opacity: 0.1,
    stroke: theme.palette.text.hint,
    fill: 'transparent',
    strokeWidth: 40,
    right: 40
  },
}));

export default featureStyles;
