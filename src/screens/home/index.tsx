import React from 'react'

import { StyleSheet, View } from 'react-native'

import { expensesData, incomeData } from '../../data/charts';
import FinancialCard from '../../components/financial-card'
import theme from '../../theme'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
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

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[50],
  },
})

export default HomeScreen
