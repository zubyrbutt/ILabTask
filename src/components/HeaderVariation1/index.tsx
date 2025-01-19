import React from 'react';

import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../theme';
import Label from '../label';
import { styles } from './styles';

interface HeaderProps {
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
}

const HeaderVariation1 = ({onMenuPress, onNotificationPress}: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
          <Icon name="menu" size={24} color={theme.colors.gray[700]} />
        </TouchableOpacity>
        <View style={styles.titleSection}>
          <Label size="2xl" weight="semibold" color={theme.colors.gray[900]}>
            Olivia Rhye
          </Label>
          <Label size="md" weight="normal" color={theme.colors.gray[500]}>
            Freelancer
          </Label>
        </View>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={onNotificationPress} style={styles.iconButton}>
          <Icon name="bell" size={24} color={theme.colors.gray[700]} />
        </TouchableOpacity>
        <View style={styles.avatar}>
          <Image source={{uri: 'https://i.pravatar.cc/300'}} style={styles.avatarImage} />
        </View>
      </View>
      </SafeAreaView>
  );
};

export default HeaderVariation1; 