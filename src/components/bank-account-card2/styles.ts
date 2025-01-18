import {StyleSheet} from 'react-native';

import theme from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray[200],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  infoButton: {
    marginLeft: theme.spacing.sm,
  },
  content: {
    gap: theme.spacing.xl * 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.lg,
  },
  logo: {
    width: 64,
    height: 64,
  },  
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceRow: {
  },
}); 