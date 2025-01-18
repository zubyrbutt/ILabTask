import React from 'react';

import {View, ScrollView} from 'react-native';

import BankAccountCard2 from '../../components/bank-account-card2';
import FinancialSummaryCard from '../../components/financial-summary-card';
import {styles} from './styles';

const Variant2Screen = () => {
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
      </View>
    </ScrollView>
  );
};

export default Variant2Screen;