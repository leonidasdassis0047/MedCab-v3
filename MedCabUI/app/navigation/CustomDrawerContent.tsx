import {
  DrawerContentScrollView,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animated from 'react-native-reanimated';

import {COLORS, constants, dummyData, FONTS, icons, SIZES} from '../constants';
import {DrawerNavigatorParamList} from './CustomDrawer';
import CustomDrawerItem from './CustomDrawerItem';

type CustomDrawerContentProps = {
  navigation: DrawerNavigationProp<DrawerNavigatorParamList>;
  setDrawerProgress?: (
    progress: Readonly<Animated.SharedValue<number>> | Animated.Value<number>,
  ) => void;

  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({
  navigation,
  // setDrawerProgress,
  selectedTab,
  setSelectedTab,
}) => {
  // const drawerProgress = useDrawerProgress();
  // setDrawerProgress?.(drawerProgress);

  const navigation2 = useNavigation<NavigationProp<DrawerNavigatorParamList>>();

  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1}} scrollEnabled>
      <View style={styles.container}>
        {/* close btn */}
        <View style={{alignItems: 'flex-start', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <Image
              source={icons.cross}
              style={{height: 32, width: 32, tintColor: COLORS.white}}
            />
          </TouchableOpacity>
        </View>
        {/* profile */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
          }}>
          <Image
            source={dummyData.myProfile?.profile_image}
            style={{width: 46, height: 46, borderRadius: SIZES.radius}}
          />
          <View style={{marginLeft: SIZES.radius}}>
            <Text style={{color: COLORS.white, ...FONTS.h3}}>
              {dummyData.myProfile.name}
            </Text>
            <Text style={{color: COLORS.white, ...FONTS.body4}}>
              View your profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* items */}
        <View style={{flex: 1, marginTop: SIZES.padding}}>
          <CustomDrawerItem
            icon={icons.home}
            label={constants.screens.home}
            isFocused={selectedTab === constants.screens.home}
            onPress={() => {
              setSelectedTab(constants.screens.home);
              navigation2.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            icon={icons.wallet}
            label={constants.screens.my_wallet}
            isFocused={selectedTab === constants.screens.my_wallet}
            onPress={() => {
              setSelectedTab(constants.screens.my_wallet);
              navigation2.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            icon={icons.notification}
            label={constants.screens.notification}
            isFocused={selectedTab === constants.screens.notification}
            onPress={() => {
              setSelectedTab(constants.screens.notification);
              navigation2.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem
            icon={icons.favourite}
            label={constants.screens.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            onPress={() => {
              setSelectedTab(constants.screens.favourite);
              navigation2.navigate('MainLayout');
            }}
          />

          {/* divider */}
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.lightGray1,
              marginVertical: SIZES.radius,
              marginLeft: SIZES.radius,
            }}
          />

          <CustomDrawerItem
            icon={icons.location}
            label={'Track order'}
            onPress={() => {
              // navigation.navigate('MainLayout');
            }}
          />
          <CustomDrawerItem icon={icons.coupon} label={'Coupons'} />
          <CustomDrawerItem icon={icons.setting} label={'Settings'} />
          <CustomDrawerItem icon={icons.profile} label={'Invite friend'} />
          <CustomDrawerItem icon={icons.help} label={'Help'} />
        </View>

        <View style={{marginBottom: SIZES.radius}}>
          <CustomDrawerItem icon={icons.logout} label={'Logout'} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparent,
    paddingVertical: 8,
    paddingHorizontal: SIZES.radius,
  },
});
