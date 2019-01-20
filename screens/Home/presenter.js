import React from 'react';
import { View, VirtualizedList, SafeAreaView } from 'react-native';

import { Label, StoryRow, PaginationFooterRow } from '../../components';

import styles from './styles';

const itemsPerPage = 30;

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    page: 1,
    selected: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.handleFocus = navigation.addListener('didFocus', this.onFocus);
  }

  componentDidUpdate(prevProps) {
    const { topIds } = this.props;
    const { topIds: prevIds } = prevProps;
    if (prevIds !== topIds) this.loadStories();
  }

  componentWillUnmount() {
    if (this.handleFocus) this.handleFocus.remove();
  }

  loadStories = () => {
    const { loaded, topIds, loadStories } = this.props;
    const { page } = this.state;
    const numToLoad = page * 30;
    const idsToLoad = topIds.slice(0, numToLoad).filter(id => !loaded[id]);
    loadStories(idsToLoad);
  };

  onFocus = () => {
    this.loadStories();
  };

  onRowSelect = (selected) => {
    const { navigation } = this.props;

    this.setState({ selected }, () => {
      navigation.navigate('storyDetail', {
        id: selected,
      });
    });
  };

  getListData = () => {
    const { loaded } = this.props;
    return Object.keys(loaded).reverse();
  };

  getItem = (data, index) => {
    const { loaded } = this.props;
    return loaded[data[index]];
  };

  getItemCount = data => data.length;

  renderItem = ({ item = {} }) => {
    const { selected } = this.state;
    const { title, id, by, score, url, time } = item;

    return (
      <StoryRow
        maxTitleChars={56}
        onSelect={this.onRowSelect}
        isSelected={selected === id}
        time={time}
        id={id}
        by={by}
        score={score}
        url={url}
        title={title} />
    );
  };

  renderFooter = () => {
    const { topIds } = this.props;
    const { page } = this.state;
    const totalPages = Math.ceil(topIds.length / itemsPerPage);
    return (
      <PaginationFooterRow
        currentPage={page}
        totalPages={totalPages} />
    );
  };

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <VirtualizedList
          ListFooterComponent={this.renderFooter}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          getItemCount={this.getItemCount}
          getItem={this.getItem}
          data={this.getListData()} />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
