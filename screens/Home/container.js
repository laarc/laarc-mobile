import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors, actions } from '../../modules/stories';

import presenter from './presenter';

const mapStateToProps = createStructuredSelector({
  topIds: selectors.getTopIds,
  loaded: selectors.getLoaded,
});

const mapDispatchToProps = {
  loadStories: actions.loadStories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(presenter);
