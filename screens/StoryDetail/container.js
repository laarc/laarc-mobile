import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors } from '../../modules/stories';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  loaded: selectors.getLoaded,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
