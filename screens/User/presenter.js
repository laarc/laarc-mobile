import React from 'react';
import { SafeAreaView } from 'react-native';

import { AuthView, ProfileView } from './views';

export default class UserScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { isAuth } = this.props;

    return (
      <SafeAreaView>
        {isAuth
          ? <ProfileView /> : <AuthView />}
      </SafeAreaView>
    );
  }
}
