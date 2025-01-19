import React from 'react';

import {View} from 'react-native';
import {BottomTabs} from 'rn-animated-tabbar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Variant2Screen from '../screens/variant2';
import theme from '../theme';

const BottomTabsData = [
  {
    id: 'Overview',
    title: 'Overview',
    icon: () => (
      <Feather name="home" size={24} color={theme.colors.gray[400]} />
    ),
    activeIcon: () => (
      <Feather name="home" size={28} color={theme.colors.white} />
    ),
    component: Variant2Screen,
  },
  {
    id: 'Transactions',
    title: 'Transactions',
    icon: () => (
      <MaterialIcons
        name="trending-up"
        size={24}
        color={theme.colors.gray[400]}
      />
    ),
    activeIcon: () => (
      <MaterialIcons name="trending-up" size={28} color={theme.colors.white} />
    ),
    component: Variant2Screen,
  },
  {
    id: 'Cards',
    title: 'Cards',
    icon: () => (
      <MaterialIcons
        name="description"
        size={24}
        color={theme.colors.gray[400]}
      />
    ),
    activeIcon: () => (
      <MaterialIcons
        name="description"
        size={28}
        color={theme.colors.white}
      />
    ),
    component: Variant2Screen,
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: () => (
      <MaterialIcons
        name="account-balance-wallet"
        size={24}
        color={theme.colors.gray[400]}
      />
    ),
    activeIcon: () => (
      <MaterialIcons
        name="account-balance-wallet"
        size={28}
        color={theme.colors.white}
      />
    ),
    component: Variant2Screen,
  },
];

const Variant2Tabs = () => {
  return (
    <View style={{flex: 1}}>
      <Variant2Screen />
        <BottomTabs
          tabsData={BottomTabsData}
          tabBarBackground={theme.colors.white}
          activeTabBackground={"#efefef"}
          navigationHandler={id => console.log(`Navigating to tab ${id}`)}
          textColor={theme.colors.black}
          activeCircleColor={theme.colors.success[700]}
          inactiveTabColor="#888888" // Gray color for inactive tabs
          tabBorderRadius={20} // Rounded corners for the tab bar
          activeTabScale={1.2} // Slightly larger active tab
        />
      
    </View>
  );
};

export default Variant2Tabs;
