import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Error from '../components/Error';
import { withTranslation } from '../i18n';

const styles = theme => ({
  dedicatedPage: {
    background: theme.palette.type === 'dark' ? theme.palette.background.dark : theme.palette.background.paper
  }
});

class ErrorPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  render() {
    const {
      errorCode,
      stars,
      classes,
      t
    } = this.props;
    if (errorCode) {
      return (
        <div className={classes.dedicatedPage}>
          <Error errorCode={errorCode} text={t('common:404')} />
        </div>
      );
    }

    return (
      <div className={classes.dedicatedPage}>
        {t('description')}
        Next stars:&nbsp;
        {stars}
      </div>
    );
  }
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '400',
  stars: 0,
};

export default withTranslation(['common'])(withStyles(styles)(ErrorPage));
