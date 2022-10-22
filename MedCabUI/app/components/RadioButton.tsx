import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  isSelected: boolean;
  onPress: () => void;
};

const RadioButton: React.FC<Props> = ({
  isSelected,
  onPress,
  containerStyle,
  iconStyle,
  label,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        containerStyle,
      ]}
      onPress={onPress}>
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={[
          {
            height: 18,
            width: 18,
            marginLeft: 4,
          },
          iconStyle,
        ]}
      />
      <Text
        style={[
          {marginLeft: SIZES.radius, color: COLORS.gray, ...FONTS.body3},
          labelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
