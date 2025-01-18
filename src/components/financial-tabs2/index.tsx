import React from 'react';

import {View, TouchableOpacity} from 'react-native';

import Label from '../label';
import theme from '../../theme';
import {styles} from './styles';

interface FinancialTabs2Props {
  onTabChange: (tab: string) => void;
}

const FinancialTabs2 = ({onTabChange}: FinancialTabs2Props) => {
  const [activeTab, setActiveTab] = React.useState('income');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'income' && styles.activeTab]}
          onPress={() => handleTabPress('income')}>
          <Label
            size="xl"
            weight="normal"
            color={
              activeTab === 'income'
                ? theme.colors.success[700]
                : theme.colors.gray[400]
            }>
            Income
          </Label>
          {activeTab === 'income' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'expenses' && styles.activeTab]}
          onPress={() => handleTabPress('expenses')}>
          <Label
            size="xl"
            weight="normal"
            color={
              activeTab === 'expenses'
                ? theme.colors.success[700]
                : theme.colors.gray[400]
            }>
            Expenses
          </Label>
          {activeTab === 'expenses' && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomBorder} />
    </View>
  );
};

export default FinancialTabs2; 