import React from 'react';

import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Label from '../label';
import theme from '../../theme';
import { styles } from './styles';


interface BankAccountCard2Props {
  bankName?: string;
  balance?: number;
  onInfoPress?: () => void;
  onArrowPress?: () => void;
}

const BankAccountCard2 = ({
  bankName = 'BBVA',
  balance = 75000,
  onInfoPress,
  onArrowPress,
}: BankAccountCard2Props) => {
  const formattedBalance = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(balance);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Label size="xl" weight="normal" color={theme.colors.gray[600]}>
          My Bank Account
        </Label>
        <TouchableOpacity onPress={onInfoPress} style={styles.infoButton}>
          <Icon name="information-outline" size={24} color={theme.colors.gray[400]} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.bankInfo}>
          <View style={styles.logoContainer}>
           <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          </View>
          <Label size="2xl" weight="normal" color={theme.colors.gray[800]}>
            {bankName}
          </Label>
        </View>

        <View style={styles.balanceSection}>
        <View>
          <Label size="sm" style={{
            textAlign: 'right',
          }} color={theme.colors.gray[500]}>
            Current Balance
          </Label>
          <View style={styles.balanceRow}>
            <Label size="xl" style={{
              textAlign: 'right',
            }} weight="normal" color={theme.colors.success[700]}>
              {formattedBalance}
            </Label>
          </View>
          </View>
          <TouchableOpacity onPress={onArrowPress}>
              <Icon 
                name="chevron-right" 
                size={32} 
                color={theme.colors.gray[400]} 
              />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BankAccountCard2; 