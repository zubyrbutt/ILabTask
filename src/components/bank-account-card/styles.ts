import {StyleSheet} from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[200],
    marginBottom: theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  icon: {
    marginLeft: 10,
  },
  content: {
    gap: theme.spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  accountInfo: {
    gap: theme.spacing.xs,
  },
  balanceSection: {
    gap: theme.spacing.xs,
  },
  balanceLabel: {
    textAlign: 'right',
  },
}); 
