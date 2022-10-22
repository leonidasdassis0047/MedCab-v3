import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

type CustomDrawerItemProps = {
  icon: any;
  label: string;
  onPress?: () => void;
  isFocused?: boolean;
};

const CustomDrawerItem: React.FC<CustomDrawerItemProps> = ({
  icon,
  label,
  isFocused,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          height: 40,
          marginBottom: SIZES.base,
          paddingLeft: SIZES.radius,
          borderRadius: SIZES.base,
          alignItems: 'center',
          backgroundColor: isFocused
            ? COLORS.transparentBlack1
            : COLORS.transparent,
        }}>
        <Image
          source={icon}
          style={{width: 20, height: 20, tintColor: COLORS.white}}
          resizeMode="contain"
        />
        <Text
          style={{
            ...FONTS.h4,
            color: COLORS.white,
            marginLeft: SIZES.radius,
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({});
