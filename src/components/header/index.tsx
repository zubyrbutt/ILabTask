import React from 'react';

import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Label from '../label';

interface HeaderProps {
  title: string;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

const Header = ({title, onMenuPress, onNotificationPress}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPress}>
     
       <Icon name="menu" size={24} color="#000000" />   
      </TouchableOpacity>

      <Label size="xl" weight="semibold">
        {title}
      </Label>

      <TouchableOpacity onPress={onNotificationPress}>
        <Icon name="bell" size={24} color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header; 