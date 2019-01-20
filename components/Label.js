import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { isFunction } from 'lodash';

const styles = StyleSheet.create({
  main_text: {
    fontSize: 17,
  },
});

class Label extends React.PureComponent {
  setRef = (view) => {
    const { setRef } = this.props;
    if (isFunction(setRef)) setRef(this, view);
  };

  render() {
    const {
      style,
      children,
      ...props
    } = this.props;

    return (
      <Text
        {...props}
        ref={this.setRef}
        style={[styles.main_text, style]}>
        {children}
      </Text>
    );
  }
}

export default Label;
