import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

type SectionProps = {
  children: React.ReactNode;
  onPress: () => void;
  title: string;
};

const Section: React.FC<SectionProps> = ({children, onPress, title}) => {
  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{...FONTS.h3, flex: 1}}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: COLORS.primary, ...FONTS.body3}}>Show All</Text>
        </TouchableOpacity>
      </View>
      {/* Content */}
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({});
