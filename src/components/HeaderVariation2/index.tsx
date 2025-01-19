import React from 'react';

import {Image, SafeAreaView, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '../label';
import theme from '../../theme';
import {styles} from './styles';

interface HeaderVariation2Props {
  name?: string;
  role?: string;
  onMenuPress?: () => void;
  onNotificationPress?: () => void;
  onMessagePress?: () => void;
  onProfilePress?: () => void;
}

const HeaderVariation2 = ({
  name = 'Olivia Smith',
  role = 'Freelancer',
  onMenuPress,
  onNotificationPress,
  onMessagePress,
  onProfilePress,
}: HeaderVariation2Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
          <MaterialCommunityIcons name="menu" size={24} color={theme.colors.success[500]} />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Label size="2xl" weight="normal" color={theme.colors.gray[600]}>
            {name}
          </Label>
          <Label size="lg" color={theme.colors.gray[400]}>
            {role}
          </Label>
        </View>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          onPress={onMessagePress}
          style={styles.iconButton}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="chat" size={23} color={theme.colors.success[700]} />
            <View style={styles.badge} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onNotificationPress}
          style={styles.iconButton}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="bell" size={23} color={theme.colors.success[700]} />
            <View style={styles.badge} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onProfilePress}>
          <Image
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderVariation2; 