import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: theme.spacing.xl,
  },
  tabsContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: theme.spacing.xl * 2,
  },
  tab: {
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
    position: 'relative',
  },
  activeTab: {
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: theme.colors.success[500],
    width: '100%',
    borderRadius: 1.5,
  },
  bottomBorder: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: theme.colors.gray[200],
  },
}); 