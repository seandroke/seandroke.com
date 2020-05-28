import { makeStyles } from '@material-ui/core/styles';

const sideNavStyles = makeStyles(theme => ({
  navigation: {},
  fixed: {},
  navMenu: {},
  bar: {},
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
  logo: {
    display: 'block',
    margin: theme.spacing(3, 0, 1),
    position: 'relative',
    padding: theme.spacing(0, 2),
    '& img': {
      height: theme.spacing(10),
    }
  },
  text: {
    '& span': {
      fontSize: 18,
      textTransform: 'Capitalize',
      fontWeight: theme.typography.fontWeightBold
    }
  },
  link: {},
  active: {},
  menu: {
    '& ul': {
      padding: 0,
      margin: 0,
    },
    '& $link': {
      margin: theme.spacing(2, 0),
      paddingTop: 0,
      paddingBottom: 0,
      background: 'none !important',
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
        '&:before': {
          width: '110%'
        },
        '& $text': {
          color: theme.palette.primary.main
        }
      }
    },
    '& $text': {
      transition: 'all 0.3s ease-in',
      position: 'relative',
    }
  }
}));

export default sideNavStyles;
