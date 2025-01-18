import {StyleSheet, Dimensions} from 'react-native';

import theme from '../../theme';

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - (theme.spacing.md * 4)) / 2; // Account for padding and gap
const cardHeight = 200; // Fixed height for all cards

export const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    height: cardHeight,
    backgroundColor: theme.colors.success[500],
    borderRadius: 15,
    overflow: 'hidden',
    margin: theme.spacing.sm,
    shadowColor: theme.colors.gray[900],
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  iconCircle: {
    width: 30,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  summaryContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  invoiceCount: {
    position: 'absolute',
    alignItems: 'center',
  },
}); 