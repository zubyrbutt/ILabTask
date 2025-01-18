import React from 'react';

import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Label from '../label';
import theme from '../../theme';
import { styles } from './styles';

interface FinancialSummaryCardProps {
  type: 'income' | 'expenses';
  amount: number;
  period: string;
  onPress?: () => void;
}

const FinancialSummaryCard = ({
  type,
  amount,
  period,
  onPress,
}: FinancialSummaryCardProps) => {
  const formattedAmount = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Icon
              name={type === 'income' ? 'arrow-up' : 'arrow-down'}
              size={24}
              color={theme.colors.white}
            />
            <FontAwesome name="euro" size={24} color={theme.colors.white} />
          </View>
          <Label size="lg" weight="normal" color={theme.colors.white}>
            {type === 'income' ? 'Income' : 'Expenses'}
          </Label>
        </View>

        <Label size="2xl" weight="normal" color={theme.colors.white}>
          {formattedAmount}
        </Label>
      </View>

      <TouchableOpacity style={styles.footer} onPress={onPress}>
        <Label size="lg" weight="normal" color={theme.colors.white}>
          {period}
        </Label>
        <Icon name="chevron-down" size={24} color={theme.colors.white} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FinancialSummaryCard; 