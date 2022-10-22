import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../constants';
import LineDivider from './LineDivider';
import TextButton from './TextButton';

type Props = {
  subTotal: number;
  total: number;
  onPress: () => void;
  shippingFee: number;
};

const FooterTotal: React.FC<Props> = ({
  onPress,
  shippingFee,
  subTotal,
  total,
}) => {
  return (
    <View style={styles.container}>
      {/* Shadow */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 2}}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: 'absolute',
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === 'ios' ? 200 : 50,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />

      {/* Order Details */}
      <View
        style={{
          paddingVertical: SIZES.radius * 1.4,
          paddingHorizontal: SIZES.padding,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          backgroundColor: COLORS.white,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1, ...FONTS.body3}}>Subtotal</Text>
          <Text style={{...FONTS.h3}}>{subTotal.toFixed(2)}</Text>
        </View>

        {/* Shipping */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            marginBottom: SIZES.radius,
          }}>
          <Text style={{flex: 1, ...FONTS.body3}}>Shipping fee</Text>
          <Text style={{...FONTS.h3}}>${shippingFee.toFixed(2)}</Text>
        </View>

        {/* Line divider */}
        <LineDivider />

        {/* Total */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
          }}>
          <Text style={{flex: 1, ...FONTS.h3}}>Total</Text>
          <Text style={{...FONTS.h3}}>${total.toFixed(2)}</Text>
        </View>

        {/* Order Button */}
        <TextButton
          buttonContainerStyle={{
            height: 46,
            marginTop: SIZES.base,
            borderRadius: SIZES.radius,
          }}
          label="Place Order"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default FooterTotal;

const styles = StyleSheet.create({
  container: {
    paddingBottom: SIZES.padding * 2,
  },
});
