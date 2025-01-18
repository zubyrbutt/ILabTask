import {StyleSheet, Dimensions} from 'react-native';

import theme from '../../theme';

const windowWidth = Dimensions.get('window').width;
const indicatorWidth = windowWidth * 0.5; // 50% of screen width

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
    width: '100%',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  tab: {
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
    width: indicatorWidth,
  },
  activeTab: {
    // If needed for additional active tab styling
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    width: indicatorWidth,
    height: 3,
    backgroundColor: theme.colors.success[500],
    borderRadius: 1.5,
    left: 0,
  },
}); 