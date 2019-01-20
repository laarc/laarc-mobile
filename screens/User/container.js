import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors } from '../../modules/user';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  isAuth: selectors.getIsAuth,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
