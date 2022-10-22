import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View} from 'react-native';

import {AuthLayout} from '..';
import {FormInput, TextButton} from '../../components';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';
import {utils} from '../../utils';

type ForgotPasswordProps = NativeStackScreenProps<
  AuthNavigationParamList,
  'ForgotPassword'
>;

const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');

  const isEnableSendEmail = () => {
    return email !== '' && emailError === '';
  };

  return (
    <AuthLayout
      title="Password Recovery"
      subTitle="Please enter your email address. We'll send you a password reset token to this email"
      titleContainerStyle={{marginTop: SIZES.padding * 2}}>
      <View
        style={{
          // flex: 1,
          marginTop: SIZES.padding,
        }}>
        <FormInput
          label="Email"
          keyboardType="email-address"
          autoComplete="email"
          placeholder="Email address"
          onChangeText={text => {
            utils.validateEmail(text, setEmailError);
            setEmail(text);
          }}
          value={email}
          error={emailError}
          AppendComponent={
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor:
                    email === ''
                      ? COLORS.gray
                      : email !== '' && emailError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
                source={
                  email === '' || (email !== '' && emailError === '')
                    ? icons.correct
                    : icons.cross
                }
              />
            </View>
          }
        />

        {/* Send button */}
        <TextButton
          buttonContainerStyle={{
            borderRadius: SIZES.radius,
            height: 50,
            marginTop: SIZES.padding,
            backgroundColor: isEnableSendEmail()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          label={'Send Email'}
          labelStyle={{color: COLORS.white, ...FONTS.h3}}
          onPress={() => {
            navigation.goBack();
          }}
          disabled={!isEnableSendEmail()}
        />
      </View>
    </AuthLayout>
  );
};

export default ForgotPassword;
