import React from 'react';

import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Svg, {Path, G} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Label from '../label';
import theme from '../../theme';
import {styles} from './styles';

type CardType = 'income' | 'expenses' | 'taxes' | 'summary';

interface FinancialSummaryCardProps {
  type: CardType;
  amount?: number;
  period?: string;
  invoiceCount?: number;
  onPress?: () => void;
}

const DonutChart = () => {
  const size = 120;
  const strokeWidth = 15;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;

  const createArc = (startAngle: number, endAngle: number): string => {
    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

    return [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');
  };

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  return (
    <Svg height={size} width={size}>
      <G transform={`rotate(-90 ${center} ${center})`}>
        {/* Income section - Green */}
        <Path
          d={createArc(0, 90)}
          stroke={theme.colors.success[500]}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Expenses section - Red */}
        <Path
          d={createArc(90, 180)}
          stroke={theme.colors.error[500]}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Taxes section - Yellow */}
        <Path
          d={createArc(180, 270)}
          stroke={theme.colors.warning[500]}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Other section - Gray */}
        <Path
          d={createArc(270, 360)}
          stroke={theme.colors.gray[400]}
          strokeWidth={strokeWidth}
          fill="none"
        />
      </G>
    </Svg>
  );
};

const FinancialSummaryCard = ({
  type,
  amount,
  period,
  invoiceCount,
  onPress,
}: FinancialSummaryCardProps) => {
  const formattedAmount = amount
    ? new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: type === 'taxes' ? 2 : 0,
        maximumFractionDigits: type === 'taxes' ? 2 : 0,
      }).format(amount)
    : '';

  const getIcon = () => {
    switch (type) {
      case 'income':
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                // gap: theme.spacing.md,
            }}>

          <View style={styles.iconCircle}>
            <MaterialIcons name="euro" size={15} color={theme.colors.success[500]} />
          </View>
            <FontAwesome5 style={{
                marginLeft: 2,
                bottom: 10
            }} name="arrow-up" size={20} color={theme.colors.white} />
          </View>

        );
      case 'expenses':
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>

          <View style={styles.iconCircle}>
            <MaterialIcons name="euro" size={15} color={theme.colors.success[500]} />
          </View>
            <FontAwesome5 style={{
                marginLeft: 2,
                bottom: 10
            }} name="arrow-down" size={20} color={theme.colors.white} />
          </View>
        
        );
      case 'taxes':
        return (
          
            <Icon name="percent" size={20} color={theme.colors.white} />
         
        );
      case 'summary':
        return (
          <View style={[styles.iconCircle, {backgroundColor: 'transparent'}]}>
            <Icon name="chart-pie" size={20} color={theme.colors.success[500]} />
          </View>
        );
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            type === 'summary' ? theme.colors.white : theme.colors.success[500],
        },
      ]}
      onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.header}>
          {getIcon()}
          <Label
            size="lg"
            weight="normal"
            color={type === 'summary' ? theme.colors.gray[900] : theme.colors.white}>
            {type === 'summary' ? 'Summary' : type.charAt(0).toUpperCase() + type.slice(1)}
          </Label>
        </View>

        {type === 'summary' ? (
          <View style={styles.summaryContent}>
            <DonutChart />
            <View style={styles.invoiceCount}>
              <Label size="sm" weight="normal" color={theme.colors.gray[900]}>
                Invoices
              </Label>
              <Label size="lg" weight="normal" color={theme.colors.gray[900]}>
                {invoiceCount}
              </Label>
            </View>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              height: 60,
            }}>
            <Label
              size="lg"
              
              weight="normal"
              color={theme.colors.white}>
              {formattedAmount}
            </Label>
          </View>
        )}
      </View>

      {type !== 'summary' && (
        <TouchableOpacity style={styles.footer} onPress={onPress}>
          <Label size="lg" weight="normal" color={theme.colors.white}>
            {period}
          </Label>
          <Icon name="chevron-down" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default FinancialSummaryCard; 