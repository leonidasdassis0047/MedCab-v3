import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {FONTS} from '../constants';

type TextIconButtonProps = {
  containerStyle?: StyleProp<TouchableOpacityProps | ViewStyle>;
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  iconPosition?: 'left' | 'right';
};

const TextIconButton: React.FC<TextIconButtonProps> = ({
  containerStyle,
  icon,
  iconPosition = 'left',
  iconStyle,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {iconPosition === 'left' && (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      )}
      <Text style={[{...FONTS.h3, marginHorizontal: 8}, labelStyle]}>
        {label}
      </Text>
      {iconPosition === 'right' && (
        <Image source={icon} style={[styles.icon, iconStyle]} />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
  },
});
