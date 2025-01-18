import {StyleSheet} from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.xl,
    zIndex: 2,
  },
  cardsContainer: {
    paddingHorizontal: theme.spacing.md,
    zIndex: 1,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  chartContainer: {
    paddingHorizontal: theme.spacing.md,
    zIndex: 1,
  },
}); 