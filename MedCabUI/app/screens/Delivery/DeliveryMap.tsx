import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {COLORS} from '../../constants';

type DeliveryMapProps = {};

const DeliveryMap: React.FC<DeliveryMapProps> = ({}) => {
  React.useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Delivery Map</Text>
    </View>
  );
};

export default DeliveryMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
});
