import {StyleSheet} from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  cardsContainer: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
}); 