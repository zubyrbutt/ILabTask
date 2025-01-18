import React, {useState} from 'react';

import {ScrollView, StyleSheet, View} from 'react-native';

import {expensesData, incomeData, invoicesData, taxesData} from '../../data/charts';
import BankAccountCard from '../../components/bank-account-card';
import FinancialTabs from '../../components/financial-tabs';
import FinancialCard from '../../components/financial-card';
import Dropdown from '../../components/dropdown';
import theme from '../../theme';
import AreaChart from '../../components/area-chart';

const periodOptions = [
  {label: 'Quarterly', value: 'quarterly'},
  {label: '1st Quarter', value: 'q1'},
  {label: '2nd Quarter', value: 'q2'},
  {label: '3rd Quarter', value: 'q3'},
  {label: '4th Quarter', value: 'q4'},
];

const chartData = [
  {date: 'Jan', value: 450, projectedValue: 380},
  {date: 'Feb', value: 780, projectedValue: 500},
  {date: 'Mar', value: 950, projectedValue: 720},
];

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('income');
  const [selectedPeriod, setSelectedPeriod] = useState('quarterly');

  return (
    <ScrollView style={styles.container}>
      <BankAccountCard
        bankName="BBVA"
        accountNumber="5678"
        balance={40206.20}
      />
      <FinancialCard
        title="Income"
        amount={1280}
        percentage={15}
        chartPoints={incomeData}
        period="Last Qtr"
        color={theme.colors.success[500]}
      />
      <FinancialCard
        title="Expenses"
        amount={1280}
        percentage={15}
        chartPoints={expensesData}
        period="Last Qtr"
        color={theme.colors.error[500]}
      />
      <FinancialCard
        title="Taxes"
        amount={1280}
        percentage={15}
        chartPoints={taxesData}
        period="Last Qtr"
        color={theme.colors.error[500]}
      />
      <FinancialCard
        title="Invoices"
        amount={1280}
        percentage={15}
        chartPoints={invoicesData}
        period="Last Qtr"
        color={theme.colors.success[500]}
      />  
     <FinancialTabs onTabChange={setActiveTab} />
      <View style={styles.dropdownContainer}>
        <Dropdown
          options={periodOptions}
          value={selectedPeriod}
          onChange={setSelectedPeriod}
        />
        <Dropdown
          options={periodOptions}
          value={selectedPeriod}
          onChange={setSelectedPeriod}
        />
      </View>
      
      <View style={styles.chartContainer}>
        <AreaChart
          data={chartData}
          color={theme.colors.success[500]}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal: theme.spacing.lg,
  },
  chartContainer: {
    marginTop: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
  },
});

export default HomeScreen;
