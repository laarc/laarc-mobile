import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const gridUnit = 8;
const smallestUnit = 4;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  smallestUnit,
  gridUnit,
  viewPadding: gridUnit * 2,
  storyRowHeight: 120,
};
