import React from 'react';
import { View, VirtualizedList, SafeAreaView } from 'react-native';

import { StoryRow } from '../../components';

import styles from './styles';

class StoryDetailScreen extends React.Component {
  state = {
    selected: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', null);
    if (!id) navigation.goBack();
  }

  getListData = () => {
    const { navigation, loaded } = this.props;
    const id = navigation.getParam('id', null);

    if (id) {
      return loaded[id] ? loaded[id].kids || [] : [];
    }

    return [];
  };

  getItem = (data, index) => ({});

  getItemCount = data => data.length;

  renderItem = ({ item = {} }) => {
    const { selected } = this.state;
    const { title, id, by, score, url, time } = item;

    return (
      <View />
    );
  };

  renderHeader = () => {
    const { navigation, loaded } = this.props;

    const id = navigation.getParam('id', null);

    if (id) {
      const {
        time,
        by,
        score,
        url,
        title,
      } = loaded[id] || {};

      return (
        <StoryRow
          maxTitleChars={-1}
          onSelect={() => {}}
          time={time}
          id={id}
          by={by}
          score={score}
          url={url}
          title={title} />
      );
    }

    return null;
  };

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <VirtualizedList
          ListHeaderComponent={this.renderHeader}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          getItemCount={this.getItemCount}
          getItem={this.getItem}
          data={this.getListData()} />
      </SafeAreaView>
    );
  }
}

export default StoryDetailScreen;
