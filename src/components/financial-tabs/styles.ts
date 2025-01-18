import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[200],
  },
  tabWrapper: {
    marginRight: theme.spacing['3xl'],
  },
  tab: {
    paddingVertical: theme.spacing.md,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: theme.colors.success[500],
    borderRadius: 2,
  },
}); 