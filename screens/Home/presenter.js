import React from 'react';
import { View, FlatList } from 'react-native';

import styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList />
      </View>
    );
  }
}

export default HomeScreen;
