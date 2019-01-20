import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { isFunction } from 'lodash';

import Label from './Label';

const styles = StyleSheet.create({
  main_touchOpacity: {
    height: 40,
    width: '100%',
    borderRadius: 3,
  },
  title_textInput: {
    width: '100%',
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
});

class Button extends React.PureComponent {
  setRef = (view) => {
    const { setRef } = this.props;
    if (isFunction(setRef)) setRef(this, view);
  };

  _onPress = (evt) => {
    const { onPress, data } = this.props;
    onPress(data);
  };

  render() {
    const {
      style,
      titleStyle,
      title,
      children,
      ...props
    } = this.props;

    return (
      <TouchableOpacity
        {...props}
        ref={this.setRef}
        style={[styles.main_touchOpacity, style]}
        onPress={this._onPress}>
        {!!title &&
          <Label
            style={[styles.title_textInput, titleStyle]}>
            {title}
          </Label>}

        {children}
      </TouchableOpacity>
    );
  }
}

export default Button;
