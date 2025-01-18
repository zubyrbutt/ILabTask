import React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import BankAccountCard2 from '../../components/bank-account-card2'
import theme from '../../theme'

const Variant2 = () => {
  return (
    <View style={styles.container}>
      <BankAccountCard2 
        bankName="BBVA"
        balance={75000}
        onInfoPress={() => {
          // Handle info press
        }}
        onArrowPress={() => {
          // Handle arrow press
        }}
      />
    </View>
  )
}

export default Variant2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
})