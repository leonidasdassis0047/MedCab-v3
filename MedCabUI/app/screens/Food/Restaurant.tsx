import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS, FONTS} from '../../constants';

type RestaurantProps = {};

const Restaurant: React.FC<RestaurantProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={{...FONTS.h3}}>Restaurant</Text>
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
});
