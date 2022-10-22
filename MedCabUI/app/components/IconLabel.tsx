import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {FONTS, SIZES} from '../constants';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
};

const IconLabel: React.FC<Props> = ({
  icon,
  label,
  containerStyle,
  iconStyle,
  labelStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={icon} style={[{width: 18, height: 18}, iconStyle]} />
      <Text style={[{...FONTS.body4, marginLeft: SIZES.base}, labelStyle]}>
        {label}
      </Text>
    </View>
  );
};

export default IconLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
