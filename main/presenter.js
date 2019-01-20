/* eslint-disable global-require */
import React from 'react';
import {
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
} from 'expo';

import AppNavigator from '../navigation/AppNavigator';

import { FetchService } from '../services';

import styles from './styles';

export default class Main extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    const { cookie, isAuth } = this.props;
    if (isAuth && cookie) {
      FetchService.setInstanceCookie(cookie);
    }
  }

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading} />
      );
    }

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios'
          && <StatusBar barStyle="default" />}

        <AppNavigator />
      </View>
    );
  }
}