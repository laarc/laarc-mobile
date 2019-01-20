import React from 'react';
import { View } from 'react-native';

import styles from './styles';

class SubmitScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

export default SubmitScreen;
