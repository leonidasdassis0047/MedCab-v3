import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';

import {AuthLayout} from '..';
import {TextButton} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';

type OTPProps = NativeStackScreenProps<AuthNavigationParamList, 'OTP'>;

const OTP: React.FC<OTPProps> = ({route}) => {
  const [timer, setTimer] = React.useState(120);

  React.useEffect(() => {
    let timerInterval = setInterval(() => {
      setTimer(prev => {
        if (prev > 0) {
          return prev - 1;
        } else {
          return prev;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subTitle={`An authentication code has been sent to ${route.params.email}`}
      titleContainerStyle={{marginTop: SIZES.padding * 2}}>
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}>
        {/* otp */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: COLORS.gray, ...FONTS.h3}}>
            Didn't receive the code?{' '}
          </Text>
          <TextButton
            buttonContainerStyle={{backgroundColor: COLORS.transparent}}
            label={`Resend (${timer})s`}
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => {
              console.log('resending otp');
            }}
          />
        </View>
      </View>

      {/* Footer */}
      <TextButton
        buttonContainerStyle={{borderRadius: SIZES.radius, height: 50}}
        label={'Continue'}
        labelStyle={{color: COLORS.white, ...FONTS.h3}}
        onPress={() => {
          console.log('Continue');
        }}
      />

      <View
        style={{
          alignItems: 'center',
          marginTop: SIZES.radius,
        }}>
        <Text style={{color: COLORS.gray, ...FONTS.body3}}>
          By signing up, you agree to our,{' '}
        </Text>
        <TextButton
          buttonContainerStyle={{backgroundColor: COLORS.transparent}}
          label="Terms and Conditions"
          labelStyle={{color: COLORS.primary, ...FONTS.body3}}
          onPress={() => {
            console.log('Terms & Conditions');
          }}
        />
      </View>
    </AuthLayout>
  );
};

export default OTP;
