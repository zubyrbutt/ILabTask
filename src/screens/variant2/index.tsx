import React from 'react';

import {View, ScrollView} from 'react-native';

import HeaderVariation2 from '../../components/HeaderVariation2';
import BankAccountCard2 from '../../components/bank-account-card2';
import FinancialSummaryCard from '../../components/financial-summary-card';
import theme from '../../theme';
import {styles} from './styles';

const Variant2Screen = () => {
  return (
    <ScrollView style={styles.container}>
     
      <BankAccountCard2 />
      <View style={styles.cardsContainer}>
        <FinancialSummaryCard
          type="income"
          amount={14250}
          period="2020 - 4Q"
          onPress={() => {
            // Handle press
          }}
        />
        <FinancialSummaryCard
          type="expenses"
          amount={10550}
          period="2020 - 4Q"
          onPress={() => {
            // Handle press
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Variant2Screen;