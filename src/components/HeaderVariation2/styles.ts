import { StyleSheet } from "react-native";

import theme from "../../theme";


export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
      backgroundColor: theme.colors.white,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.gray[200],
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.lg,
    },
    menuButton: {
      padding: theme.spacing.xs,
    },
    userInfo: {
      gap: theme.spacing.xs,
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
    },
    iconButton: {
      padding: theme.spacing.xs,
    },
    iconContainer: {
      position: 'relative',
    },
    badge: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 12,
      height: 12,
      borderRadius: 6,
      backgroundColor: theme.colors.error[500],
      borderWidth: 2,
      borderColor: theme.colors.white,
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
  });
  