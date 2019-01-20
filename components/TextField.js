import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { isFunction } from 'lodash';

const styles = StyleSheet.create({
  main_textInput: {
    height: 40,
    width: '100%',
    borderRadius: 3,
  },
});

class TextField extends React.PureComponent {
  setRef = (view) => {
    const { setRef } = this.props;
    if (isFunction(setRef)) setRef(this, view);
  };

  _onChange = (value) => {
    const { onChange, name } = this.props;
    onChange(value, name);
  };

  render() {
    const {
      style,
      type,
      value,
      disabled = false,
      ...props
    } = this.props;

    return (
      <TextInput
        {...props}
        ref={this.setRef}
        style={[styles.main_textInput, style]}
        secureTextEntry={type === 'password'}
        editable={!disabled}
        onChangeText={this._onChange}
        value={value} />
    );
  }
}

export default TextField;
