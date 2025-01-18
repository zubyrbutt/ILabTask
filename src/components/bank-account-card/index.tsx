import React from 'react';

import {View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Label from '../label';
import theme from '../../theme';
import { styles } from './styles';


interface BankAccountCardProps {
  bankName: string;
  accountNumber: string;
  balance: number;
}

const BankAccountCard = ({
  bankName,
  accountNumber,
  balance,
}: BankAccountCardProps) => {
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(balance);

  const maskedAccountNumber = `****${accountNumber.slice(-4)}`;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Label size='lg' weight="normal" color={theme.colors.gray[500]}>
          Your Bank Account
        </Label>
        <TouchableOpacity>
          <Icon style={styles.icon} name="help-circle" size={20} color={theme.colors.gray[400]} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.bankInfo}>
          <View style={styles.logoContainer}>
            {/* TODO: Need to add the svg icon here */}
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.accountInfo}>
            <Label size="xl" weight="semibold" color={theme.colors.gray[900]}>
              {bankName}
            </Label>
            <Label size="lg" color={theme.colors.gray[500]}>
              {maskedAccountNumber}
            </Label>
          </View>
        </View>

        <View style={styles.balanceSection}>
          <Label style={styles.balanceLabel} size="md" color={theme.colors.gray[500]}>
            Current Balance
          </Label>
          <Label size="3xl" weight="semibold" color={theme.colors.success[500]}>
            {formattedBalance}
          </Label>
        </View>
      </View>
    </View>
  );
};

export default BankAccountCard; 