import React from 'react';
import { View, StyleSheet } from 'react-native';
import { isFunction } from 'lodash';

import Button from './Button';
import Label from './Label';

import { layout, colors } from '../constants';

const paddingBase = layout.gridUnit * 2;

const styles = StyleSheet.create({
  row_view: {
    height: layout.storyRowHeight,
    width: '100%',
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: paddingBase,
    paddingRight: paddingBase,
    borderWidth: 2,
    borderColor: 'purple',
  },
  votes_view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: layout.storyRowHeight,
    width: layout.gridUnit * 6,
  },
  info_view: {
    paddingTop: paddingBase,
  },
  vote_button: {
    height: 20,
    width: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});

class PaginationFooterRow extends React.PureComponent {
  setRef = (view) => {
    const { setRef } = this.props;
    if (isFunction(setRef)) setRef(this, view);
  };

  render() {
    const {
      style,
      totalPages,
      currentPage,
    } = this.props;

    return (
      <View
        style={[styles.row_view, style]}
        ref={this.setRef}>
        <Label>{`${currentPage} of ${totalPages}`}</Label>
      </View>
    );
  }
}

export default PaginationFooterRow;
