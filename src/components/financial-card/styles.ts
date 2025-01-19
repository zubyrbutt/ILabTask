import {StyleSheet} from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: theme.spacing.lg,
    margin: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  percentageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginTop: theme.spacing.md,
  },
  chartContainer: {
    width: '50%',
    height: 120,
    
    // backgroundColor: 'red',
  },
}); 