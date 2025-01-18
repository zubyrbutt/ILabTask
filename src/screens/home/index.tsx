import React from 'react'

import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
  <Button
    title="Variant 1"
    onPress={() => navigation.navigate('Variant1')}
  />
  <Button
    title="Variant 2"
    onPress={() => navigation.navigate('Variant2')}
  />  
    </View>
  )
}

export default HomeScreen