import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../../../../modules/user';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  username: selectors.getUsername,
  isAuth: selectors.getIsAuth,
  karma: selectors.getKarma,
  about: selectors.getAbout,
  created: selectors.getCreated,
});

const mapDispatchToProps = {
  getUser: actions.getUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
