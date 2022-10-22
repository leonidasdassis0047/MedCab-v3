import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {COLORS, FONTS, SIZES} from '../constants';
import {Text, View} from 'react-native';

const TwoPointSlider: React.FC<{
  values: [number, number];
  max: number;
  min: number;
  preFix?: string;
  postFix?: string;
  onValuesChange: (values: number[]) => void;
}> = ({max, min, onValuesChange, preFix, postFix, values}) => {
  return (
    <MultiSlider
      min={min}
      max={max}
      onValuesChange={onValuesChange}
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 16}
      step={1}
      markerOffsetY={16}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      minMarkerOverlapDistance={50}
      customMarker={evt => {
        return (
          <View
            style={{
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 30,
                borderWidth: 4,
                borderColor: COLORS.white,
                backgroundColor: COLORS.primary,
              }}
            />
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.darkBlue,
                marginTop: 2,
                fontSize: 14,
              }}>
              {preFix ? preFix : null}
              {evt.currentValue} {postFix ? postFix : null}
            </Text>
          </View>
        );
      }}
    />
  );
};
export default TwoPointSlider;
