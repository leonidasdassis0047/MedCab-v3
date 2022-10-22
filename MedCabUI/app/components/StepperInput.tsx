import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import IconButton from './IconButton';

type StepperInputProps = {
  onAdd: () => void;
  onMinus: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  value: number;
};

const StepperInput: React.FC<StepperInputProps> = ({
  onAdd,
  onMinus,
  value,
  containerStyle,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          height: 46,
          backgroundColor: COLORS.lightGray2,
          borderRadius: SIZES.base,
          paddingHorizontal: SIZES.radius,
        },
        containerStyle,
      ]}>
      <IconButton
        containerStyle={{
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        icon={icons.minus}
        iconStyle={{
          height: 22,
          width: 22,
          tintColor: value > 0 ? COLORS.primary : COLORS.gray,
        }}
        onPress={onMinus}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h3}}>{value}</Text>
      </View>

      <IconButton
        containerStyle={{
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        icon={icons.plus}
        iconStyle={{
          height: 22,
          width: 22,
          tintColor: value > 0 ? COLORS.primary : COLORS.gray,
        }}
        onPress={onAdd}
      />
    </View>
  );
};

export default StepperInput;
