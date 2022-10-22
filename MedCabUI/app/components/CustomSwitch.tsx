import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../constants';

type CustomSwitchProps = {
  onChange: (value: boolean) => void;
  value: boolean;
};

const CustomSwitch: React.FC<CustomSwitchProps> = ({onChange, value}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onChange(!value);
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* Switch */}
        <View style={value ? styles.onContainer : styles.offContainer}>
          <View
            style={[
              styles.dot,
              {backgroundColor: value ? COLORS.white : COLORS.primary},
            ]}
          />
        </View>
        {/* Text */}
        <Text
          style={{
            color: value ? COLORS.primary : COLORS.gray,
            marginLeft: SIZES.base,
            ...FONTS.body4,
          }}>
          Save Me
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  onContainer: {
    width: 40,
    height: 20,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
  offContainer: {
    width: 40,
    height: 20,
    paddingLeft: 2,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
