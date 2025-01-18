import React from 'react';

import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Animated from 'react-native-reanimated';

import Label from '../label';
import theme from '../../theme';
import {styles} from './styles';
import { LineChart } from './chart';
import { ChartPoint } from '../../data/charts';

interface FinancialCardProps {
  title: string;
  amount: number;
  percentage: number;
  period: string;
  chartPoints: ChartPoint[];
  color: string;
}

const FinancialCard = ({title, amount, percentage, period, chartPoints, color}: FinancialCardProps) => {
  const isPositive = percentage > 0;
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  return (
    <Animated.View style={styles.container}>
      <View style={styles.header}>
        <Label size="xl" weight="semibold" color={theme.colors.gray[900]}>
          {title}
        </Label>
        <Icon name="more-vertical" size={20} color={theme.colors.gray[500]} />
      </View>

      <View style={styles.content}>
        <View>
          <Label size="3xl" weight="semibold" color={theme.colors.gray[900]}>
            {formattedAmount}
          </Label>
          <View style={styles.percentageRow}>
            <Icon
              name={isPositive ? 'arrow-up' : 'arrow-down'}
              size={20}
              color={isPositive ? theme.colors.success[500] : theme.colors.error[500]}
            />
            <Label
              size="lg"
              weight="medium"
              color={isPositive ? theme.colors.success[500] : theme.colors.error[500]}>
              {Math.abs(percentage)}%
            </Label>
            <Label size="lg" color={theme.colors.gray[600]}>
              {period}
            </Label>
          </View>
        </View>

        <View style={styles.chartContainer}>
          <LineChart 
            points={chartPoints}
            color={color}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default FinancialCard; 