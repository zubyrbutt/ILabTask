import React from 'react'

import { StyleSheet, View } from 'react-native'

import Header from '../../components/header'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header 
        title="Olivia Rhye"
        onMenuPress={() => console.log('Menu pressed')}
        onNotificationPress={() => console.log('Notification pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default HomeScreen
