import React from 'react';
import {TouchableOpacity, View, Dimensions} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  Easing,
} from 'react-native-reanimated';

import Label from '../label';
import theme from '../../theme';
import {styles} from './styles';

interface FinancialTabsProps {
  onTabChange: (tab: string) => void;
}

const windowWidth = Dimensions.get('window').width;
const indicatorWidth = windowWidth * 0.5;

const FinancialTabs = ({onTabChange}: FinancialTabsProps) => {
  const [activeTab, setActiveTab] = React.useState('income');
  const translateX = useSharedValue(0);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
    // Animate the indicator
    translateX.value = withTiming(
      tab === 'income' ? 0 : indicatorWidth,
      {
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      },
    );
  };

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab]}
          onPress={() => handleTabPress('income')}>
          <Label
            size="xl"
            color={
              activeTab === 'income'
                ? theme.colors.success[700]
                : theme.colors.gray[400]
            }>
            Income
          </Label>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab]}
          onPress={() => handleTabPress('expenses')}>
          <Label
            size="xl"
            color={
              activeTab === 'expenses'
                ? theme.colors.success[700]
                : theme.colors.gray[400]
            }>
            Expenses
          </Label>
        </TouchableOpacity>
        <Animated.View style={[styles.activeIndicator, indicatorStyle]} />
      </View>
    </View>
  );
};

export default FinancialTabs; 