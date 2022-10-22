import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CartTabProps = {};

const CartTab: React.FC<CartTabProps> = () => {
  return (
    <View style={styles.container}>
      <Text>CartTab</Text>
    </View>
  );
};

export default CartTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
