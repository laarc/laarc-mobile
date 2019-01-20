import React from 'react';
import { View, StyleSheet, Image, PixelRatio, TouchableOpacity } from 'react-native';
import { isFunction } from 'lodash';

import { Formatting } from '../utils';

import Button from './Button';
import Label from './Label';

import { layout, colors } from '../constants';

const { gridUnit, storyRowHeight, window: { width } } = layout;

const paddingBase = layout.gridUnit * 2;
const rowPad = paddingBase * 2;
const votesViewWidth = layout.gridUnit * 6;
const infoViewWidth = width - rowPad - votesViewWidth;
const voteButtonSize = 30;
const infoViewPad = (storyRowHeight - ((voteButtonSize * 2) + (gridUnit * 2))) / 2;
const voteImgSize = 16;
const voteBtnInset = (voteButtonSize - voteImgSize) / 2;

const styles = StyleSheet.create({
  row_view: {
    height: storyRowHeight,
    width,
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: paddingBase,
    paddingRight: paddingBase,
  },
  selected_view: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  votes_view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: storyRowHeight,
    width: gridUnit * 6,
  },
  info_view: {
    width: infoViewWidth,
    minWidth: infoViewWidth,
    height: storyRowHeight,
    paddingTop: infoViewPad,
    paddingBottom: infoViewPad,
    paddingLeft: paddingBase,
    paddingRight: gridUnit,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  vote_button: {
    height: voteButtonSize,
    width: voteButtonSize,
    position: 'relative',
  },
  upvote_button: {
    marginBottom: gridUnit * 2,
  },
  voteTitle_textInput: {
    lineHeight: voteButtonSize,
  },
  infoString_textInput: {
    fontSize: 14,
    color: colors.subtext,
  },
  vote_image: {
    height: voteImgSize,
    width: voteImgSize,
    position: 'absolute',
    left: voteBtnInset,
    top: voteBtnInset,
  },
});

const pixRatio = PixelRatio.get();

const upImgStyles = [styles.vote_image];
const downImgStyles = [styles.vote_image];

const UpvoteImage = () => {
  switch (pixRatio) {
    case 1:
      return (
        <Image
          style={upImgStyles}
          source={require('../assets/images/upvote.png')} />
      );

    case 1.5:
    case 2:
      return (
        <Image
          style={upImgStyles}
          source={require('../assets/images/upvote2x.png')} />
      );

    default:
      return (
        <Image
          style={upImgStyles}
          source={require('../assets/images/upvote3x.png')} />
      );
  }
};

const DownvoteImage = () => {
  switch (pixRatio) {
    case 1:
      return (
        <Image
          style={downImgStyles}
          source={require('../assets/images/downvote.png')} />
      );

    case 1.5:
    case 2:
      return (
        <Image
          style={downImgStyles}
          source={require('../assets/images/downvote2x.png')} />
      );

    default:
      return (
        <Image
          style={downImgStyles}
          source={require('../assets/images/downvote3x.png')} />
      );
  }
};

const UpvoteButtons = (props) => {
  const { onUpvote, onDownvote } = props;

  return (
    <View style={styles.votes_view}>
      <Button
        style={[styles.vote_button, styles.upvote_button]}
        onPress={onUpvote}>
        <UpvoteImage />
      </Button>

      <Button
        style={styles.vote_button}
        onPress={onDownvote}>
        <DownvoteImage />
      </Button>
    </View>
  );
};

class StoryRow extends React.PureComponent {
  setRef = (view) => {
    const { setRef } = this.props;
    if (isFunction(setRef)) setRef(this, view);
  };

  _onUpvote = () => {
    const { onChange, name } = this.props;
  };

  _onDownvote = () => {
    const { onChange, name } = this.props;
  };

  _onSelect = () => {
    const { id, onSelect } = this.props;
    onSelect(id);
  };

  render() {
    const {
      style,
      title,
      id,
      url,
      maxTitleChars,
      isSelected,
    } = this.props;

    const infoString = Formatting.itemInfoString(this.props);
    const truncatedTitle = (maxTitleChars === -1) ?
      title : Formatting.truncateString(title, maxTitleChars);

    return (
      <View
        style={[styles.row_view, style, isSelected ? styles.selected_view : {}]}
        ref={this.setRef}>
        <UpvoteButtons
          onDownvote={this._onDownvote}
          onUpvote={this._onUpvote} />

        <TouchableOpacity
          onPress={this._onSelect}
          style={[styles.info_view]}>
          <Label>{truncatedTitle}</Label>

          <Label style={styles.infoString_textInput}>
            {infoString}
          </Label>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StoryRow;
