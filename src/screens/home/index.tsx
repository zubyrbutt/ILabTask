import React from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'

import { expensesData, incomeData, invoicesData, taxesData } from '../../data/charts';
import BankAccountCard from '../../components/bank-account-card'
import FinancialCard from '../../components/financial-card'
import theme from '../../theme'

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} >
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
})

export default HomeScreen
