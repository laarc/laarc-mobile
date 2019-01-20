import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors } from '../modules/user';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  isAuth: selectors.getIsAuth,
  cookie: selectors.getUserCookie,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
