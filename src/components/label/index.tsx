import React from 'react';

import {Text, TextStyle, StyleSheet} from 'react-native';

interface LabelProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: React.ReactNode;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: TextStyle;
  numberOfLines?: number;
  onPress?: () => void;
}

const getFontSize = (size: LabelProps['size'] = 'md'): number => {
  const sizes = {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 40,
    '5xl': 48,
  };
  return sizes[size];
};

const getFontWeight = (weight: LabelProps['weight'] = 'normal'): TextStyle['fontWeight'] => {
  const weights: Record<LabelProps['weight'], TextStyle['fontWeight']> = {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  };

  return weights[weight];
};

const Label = ({
  size = 'md',
  weight = 'normal',
  children,
  color = '#000000',
  align = 'left',
  style,
  numberOfLines,
  onPress,
}: LabelProps) => {
  const baseStyle = {
    fontSize: getFontSize(size),
    fontWeight: getFontWeight(weight),
    color,
    textAlign: align,
  };

  const combinedStyles = StyleSheet.compose(baseStyle, style);

  return (
    <Text
      style={combinedStyles}
      numberOfLines={numberOfLines}
      onPress={onPress}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default Label; 