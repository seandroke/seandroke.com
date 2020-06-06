import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const headerStyles = makeStyles(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  openDrawer: {},
  header: {
    color: theme.palette.text.primary,
    background: 'none',
    boxShadow: 'none',
    position: 'fixed',
    visibility: 'hidden',
    opacity: 0,
    '&$fixed': {
      transition: 'opacity 0.5s ease-out',
      position: 'fixed',
      visibility: 'visible',
      opacity: 1,
      background: fade(theme.palette.background.paper, 0.8),
      backdropFilter: 'saturate(180%) blur(20px)',
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        },
      },
      '& $bar': {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      }
    },
    '&$openDrawer': {
      background: 'none',
      backdropFilter: 'none'
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(0, 2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0),
      },
      display: 'flex'
    }
  },
  logo: {
    flex: 1,
    display: 'flex',
    padding: theme.spacing(0, 2),
    justifyContent: 'center',
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      fontSize: 22,
      color: theme.palette.text.primary,
      alignItems: 'center',
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.common.white
      }
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      width: 48,
      height: 48,
      marginRight: theme.spacing()
    }
  },
  invert: {},
  navLogo: {
    width: '100%',
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            },
          }
        }
      },
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  menuOpen: {},
  show: {},
  paperNav: {
    background: fade(theme.palette.background.paper, 0.8),
    backdropFilter: 'saturate(180%) blur(20px)',
    width: '100%',
    position: 'fixed',
    zIndex: 50,
    height: '100%',
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      },
      [theme.breakpoints.down('sm')]: {
        backgroundColor: theme.palette.common.white,
        '&:after, &:before': {
          backgroundColor: theme.palette.common.white
        },
      }
    }
  },
  mobileNav: {
    '& $menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      listStyle: 'none',
      '& li': {
        textAlign: 'center',
        animationName: '$slideRight',
        animationTimingFunction: 'ease',
        '& a': {
          fontSize: 24,
          padding: theme.spacing(1, 4),
          marginBottom: theme.spacing(),
          '&:before': {
            content: '""',
            position: 'absolute',
            left: theme.spacing(-2),
            top: 5,
            opacity: 0.2,
            background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            height: '75%',
            width: 0,
            transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
          },
          '&:hover': {
            color: theme.palette.primary.main,
            background: 'none',
            '&:before': {
              width: '110%'
            },
          }
        }
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
}));

export default headerStyles;
