import React, {useState} from 'react';

import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

import Label from '../label';
import theme from '../../theme';
import { styles } from './styles';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown = ({options, value, onChange}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const rotateValue = useSharedValue(0);
  const heightValue = useSharedValue(0);

  const selectedOption = options.find(opt => opt.value === value);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    rotateValue.value = withTiming(isOpen ? 0 : 180, {
      duration: 300,
    });
    heightValue.value = withTiming(isOpen ? 0 : options.length * 48, {
      duration: 300,
    });
  };

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotateValue.value}deg`}],
    };
  });

  const contentStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
      opacity: heightValue.value === 0 ? 0 : 1,
    };
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleDropdown}
        activeOpacity={0.7}>
        <Label size="lg" color={theme.colors.gray[700]}>
          {selectedOption?.label}
        </Label>
        <Animated.View style={iconStyle}>
          <Icon name="chevron-down" size={20} color={theme.colors.gray[500]} />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={[styles.content, contentStyle]}>
        {options.map(option => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              value === option.value && styles.selectedOption,
            ]}
            onPress={() => {
              onChange(option.value);
              toggleDropdown();
            }}>
            <Label
              size="md"
              color={
                value === option.value
                  ? theme.colors.success[500]
                  : theme.colors.gray[700]
              }>
              {option.label}
            </Label>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
};

export default Dropdown; 