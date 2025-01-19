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
  const isLowPerformance = Math.abs(percentage) < 15;
  
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  const getPercentageColor = () => {
    if (isLowPerformance) {
      return theme.colors.error[500];
    }
    return isPositive ? theme.colors.success[500] : theme.colors.error[500];
  };

  const getArrowIcon = () => {
    if (isLowPerformance) {
      return 'arrow-down';
    }
    return isPositive ? 'arrow-up' : 'arrow-down';
  };

  return (
    <Animated.View style={styles.container}>
      <View style={styles.header}>
        <Label size='lg' weight="semibold" color={theme.colors.gray[900]}>
          {title}
        </Label>
        <Icon name="more-vertical" size={20} color={theme.colors.gray[500]} />
      </View>

      <View style={styles.content}>
        <View>
          <Label size="2xl" weight="semibold" color={theme.colors.gray[900]}>
            {formattedAmount}
          </Label>
          <View style={styles.percentageRow}>
            <Icon
              name={getArrowIcon()}
              size={20}
              color={getPercentageColor()}
            />
            <Label
              size="lg"
              weight="medium"
              color={getPercentageColor()}>
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
            color={isLowPerformance ? theme.colors.error[500] : color}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default FinancialCard; 