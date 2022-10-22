import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {BackHandler, Image, StyleSheet, Text, View} from 'react-native';
import {TextButton} from '../../components';
import {COLORS, FONTS, images, SIZES} from '../../constants';
import {HomeStackParamList} from '../../navigation/HomeStack';

type SuccessProps = NativeStackScreenProps<HomeStackParamList, 'Success'> & {};

const Success: React.FC<SuccessProps> = ({navigation}) => {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    return () => {
      backHandler.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={images.success} style={{width: 150, height: 150}} />
        <Text style={{marginTop: SIZES.radius, ...FONTS.h1}}>
          Congratulations
        </Text>
        <Text
          style={{
            marginTop: SIZES.radius,
            ...FONTS.body3,
            color: COLORS.darkGray,
            textAlign: 'center',
          }}>
          Payment was successful
        </Text>
      </View>

      {/* Footer */}
      <TextButton
        buttonContainerStyle={{
          height: 50,
          marginBottom: SIZES.padding * 3,
          borderRadius: SIZES.radius,
        }}
        label="Done"
        onPress={() => {
          navigation.navigate('DeliveryStatus');
        }}
      />
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
});
