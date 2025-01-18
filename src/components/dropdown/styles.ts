import {StyleSheet} from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.md,
    width: '50%',
    zIndex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.sm,
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.gray[300],
    zIndex: 2,
  },
  content: {
    position: 'absolute',
    top: '100%',
    left: theme.spacing.md,
    right: theme.spacing.md,
    overflow: 'hidden',
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    marginTop: theme.spacing.xs,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option: {
    padding: theme.spacing.md,
  },
  selectedOption: {
    backgroundColor: theme.colors.success[50],
  },
}); 