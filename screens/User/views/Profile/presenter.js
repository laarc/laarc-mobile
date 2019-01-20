import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Label } from '../../../../components';

import { layout } from '../../../../constants';

const styles = StyleSheet.create({
  main_view: {
    padding: layout.viewPadding,
  },
});

export default class ProfileView extends React.Component {
  state = {};

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    const {
      username,
      created,
      karma,
      about,
    } = this.props;

    return (
      <View
        style={[styles.main_view]}>
        <Label>{`user ${username}`}</Label>
        <Label>{`created ${created}`}</Label>
        <Label>{`karma ${karma}`}</Label>
        <Label>{`about ${about}`}</Label>
      </View>
    );
  }
}
