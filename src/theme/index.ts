import colors from './colors';
import spacing from './spacing';
import typography from './typography';

const theme = {
  colors,
  spacing,
  typography,
} as const;

export type Theme = typeof theme;
export default theme;