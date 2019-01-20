import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../../../../modules/user';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  username: selectors.getUsername,
  cookie: selectors.getUserCookie,
  isAuth: selectors.getIsAuth,
});

const mapDispatchToProps = {
  userLogin: actions.userLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
