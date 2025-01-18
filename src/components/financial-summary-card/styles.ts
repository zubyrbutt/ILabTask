import {StyleSheet} from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.success[500],
    borderRadius: 15,
    overflow: 'hidden',
    margin: theme.spacing.sm,
  },
  content: {
    padding: theme.spacing.xl,
    gap: theme.spacing.xl * 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.success[700],
  },
}); 