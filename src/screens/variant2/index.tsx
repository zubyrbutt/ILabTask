import React, {useState} from 'react';

import {View, ScrollView} from 'react-native';

import BankAccountCard2 from '../../components/bank-account-card2';
import FinancialTabs2 from '../../components/financial-tabs2';
import AnimatedDropdown from '../../components/animated-dropdown';
import FinancialSummaryCard from '../../components/financial-summary-card';
import {styles} from './styles';

const periodOptions = [
  {label: 'Quarterly', value: 'quarterly'},
  {label: '1st Quarter', value: 'q1'},
  {label: '2nd Quarter', value: 'q2'},
  {label: '3rd Quarter', value: 'q3'},
  {label: '4th Quarter', value: 'q4'},
];

const yearOptions = [
  {label: '2021', value: '2021'},
  {label: '2020', value: '2020'},
  {label: '2019', value: '2019'},
];

const Variant2Screen = () => {
  const [activeTab, setActiveTab] = useState('income');
  const [selectedPeriod, setSelectedPeriod] = useState('quarterly');
  const [selectedYear, setSelectedYear] = useState('2021');

  const financialData = {
    income: 14250,
    expenses: 10550,
    taxes: 118.99,
    invoices: 30,
    period: '2020 - 4Q',
  };

  return (
    <ScrollView style={styles.container}>
      <BankAccountCard2 />
      
      <View style={styles.cardsContainer}>
        <View style={styles.cardRow}>
          <FinancialSummaryCard
            type="income"
            amount={financialData.income}
            period={financialData.period}
          />
          <FinancialSummaryCard
            type="expenses"
            amount={financialData.expenses}
            period={financialData.period}
          />
        </View>
        <View style={styles.cardRow}>
          <FinancialSummaryCard
            type="taxes"
            amount={financialData.taxes}
            period={financialData.period}
          />
          <FinancialSummaryCard
            type="summary"
            invoiceCount={financialData.invoices}
          />
        </View>
        <FinancialTabs2 onTabChange={setActiveTab} />
      <View style={styles.dropdownContainer}>
        <AnimatedDropdown
          options={periodOptions}
          value={selectedPeriod}
          onChange={setSelectedPeriod}
          width="48%"
        />
        <AnimatedDropdown
          options={yearOptions}
          value={selectedYear}
          onChange={setSelectedYear}
          width="48%"
        />
      </View>
      </View>
    </ScrollView>
  );
};

export default Variant2Screen;