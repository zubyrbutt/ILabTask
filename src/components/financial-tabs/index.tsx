import React, {useState} from 'react';

import {View, TouchableOpacity} from 'react-native';

import Label from '../label';
import theme from '../../theme';
import { styles } from './styles';


interface Tab {
  id: string;
  label: string;
}

const tabs: Tab[] = [
  {id: 'income', label: 'Income'},
  {id: 'expenses', label: 'Expenses'},
];

interface FinancialTabsProps {
  onTabChange: (tabId: string) => void;
}

const FinancialTabs = ({onTabChange}: FinancialTabsProps) => {
  const [activeTab, setActiveTab] = useState('income');

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <View key={tab.id} style={styles.tabWrapper}>
          <TouchableOpacity
            onPress={() => handleTabPress(tab.id)}
            style={styles.tab}>
            <Label
              size="xl"
              weight={activeTab === tab.id ? 'semibold' : 'normal'}
              color={
                activeTab === tab.id
                  ? theme.colors.gray[900]
                  : theme.colors.gray[500]
              }>
              {tab.label}
            </Label>
          </TouchableOpacity>
          {activeTab === tab.id && <View style={styles.activeIndicator} />}
        </View>
      ))}
    </View>
  );
};

export default FinancialTabs; 