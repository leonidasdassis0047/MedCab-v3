import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS} from '../constants';

type TextButtonProps = {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  labelRight?: string;
  labelRightStyle?: StyleProp<TextStyle>;
  buttonContainerStyle?: StyleProp<TouchableOpacityProps | ViewStyle>;
  onPress: () => void;
  disabled?: boolean;
};

const TextButton: React.FC<TextButtonProps> = ({
  buttonContainerStyle,
  disabled,
  label,
  labelStyle,
  labelRight,
  labelRightStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled as boolean}
      onPress={onPress}
      style={[styles.container, buttonContainerStyle]}>
      <Text style={[{...FONTS.h3, color: COLORS.white}, labelStyle]}>
        {label}
      </Text>
      {labelRight && (
        <Text
          style={[
            {...FONTS.h3, color: COLORS.white, textAlign: 'right'},
            labelRightStyle,
          ]}>
          {labelRight}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
