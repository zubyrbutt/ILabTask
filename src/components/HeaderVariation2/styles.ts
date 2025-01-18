import { StyleSheet } from "react-native";

import theme from "../../theme";


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
      backgroundColor: theme.colors.white,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.gray[200],
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
    },
    titleSection: {
      gap: theme.spacing.xs,
    },
    iconButton: {
      padding: theme.spacing.xs,
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
    },
    avatar: {
      width: theme.spacing['5xl'],
      height: theme.spacing['5xl'],
      borderRadius: 100,
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      borderRadius: 100,
    },
  });
  