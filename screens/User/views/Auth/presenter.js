import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';

import { TextField, Button, Label } from '../../../../components';

import { layout } from '../../../../constants';

const styles = StyleSheet.create({
  main_view: {
    padding: layout.viewPadding,
  },
  field_textInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    marginBottom: layout.gridUnit,
  },
  submit_touchOpacity: {
    borderColor: 'lightgray',
    borderWidth: 1,
  },
});

export default class AuthView extends React.Component {
  state = {
    username: '',
    password: '',
  };

  onLoginPress = () => {
    const { userLogin } = this.props;
    const { username, password } = this.state;
    userLogin(username, password);
  };

  onFieldChange = (value, name) => {
    this.setState({
      [name]: value,
    });
  };

  onTap = () => {
    Keyboard.dismiss();
  };

  render() {
    const { username, password } = this.state;

    return (
      <View
        onStartShouldSetResponder={() => true}
        onResponderGrant={this.onTap}
        style={[styles.main_view]}>
        <TextField
          placeholder="username"
          style={[styles.field_textInput, styles.loginField_textInput]}
          onChange={this.onFieldChange}
          value={username}
          name="username" />

        <TextField
          placeholder="password"
          style={[styles.field_textInput]}
          onChange={this.onFieldChange}
          value={password}
          type="password"
          name="password" />

        <Button
          style={[styles.submit_touchOpacity]}
          title="submit"
          onPress={this.onLoginPress} />
      </View>
    );
  }
}
