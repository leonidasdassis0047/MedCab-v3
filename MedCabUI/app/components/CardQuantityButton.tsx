import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

type CardQuantityButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  quantity: number;
  onPress: () => void;
};

const CardQuantityButton: React.FC<CardQuantityButtonProps> = ({
  containerStyle,
  quantity,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image source={icons.cart} style={[styles.iconStyle, iconStyle]} />
      <View style={styles.quantityContainer}>
        <Text
          style={{
            ...FONTS.body5,
            // lineHeight: 0,
            fontSize: 10,
            color: COLORS.white,
          }}>
          {quantity}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardQuantityButton;

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightOrange2,
  },
  iconStyle: {
    height: 18,
    width: 18,
    tintColor: COLORS.darkBlue,
  },
  quantityContainer: {
    position: 'absolute',
    top: 2,
    right: 1,
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius * 2,
    backgroundColor: COLORS.primary,
  },
});
