import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {AuthLayout} from '..';
import {
  CustomSwitch,
  FormInput,
  TextButton,
  TextIconButton,
} from '../../components';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';
import {utils} from '../../utils';

type SignInProps = NativeStackScreenProps<AuthNavigationParamList, 'SignIn'>;

const SignIn: React.FC<SignInProps> = ({navigation}) => {
  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');

  const [showPassword, setShowPassword] = React.useState<boolean>(true);
  const [saveMe, setSaveMe] = React.useState<boolean>(false);

  const isEnableSignIn = () => {
    return email !== '' && password !== '' && emailError === '';
  };

  return (
    <AuthLayout
      title="Let's Get You Started"
      subTitle="Welcome back dear, we've missed you">
      <View style={{flex: 1, marginTop: SIZES.padding}}>
        {/* Form inputs */}
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

        <FormInput
          label="Password"
          keyboardType="default"
          autoComplete="password"
          placeholder="Password"
          secureTextEntry={showPassword}
          onChangeText={text => {
            utils.validatePasswordLogin(text, setPasswordError);
            setPassword(text);
          }}
          value={password}
          error={passwordError}
          containerStyle={{marginTop: SIZES.radius}}
          AppendComponent={
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 20, height: 20, tintColor: COLORS.gray}}
                source={showPassword ? icons.eye : icons.eye_close}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me && Forgot password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}>
          <CustomSwitch onChange={setSaveMe} value={saveMe} />
          <TextButton
            buttonContainerStyle={{backgroundColor: COLORS.transparent}}
            label="Forgot Password?"
            labelStyle={{...FONTS.body4, color: COLORS.gray}}
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
          />
        </View>

        {/* Signin button */}
        <TextButton
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: (isEnableSignIn() as boolean)
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          label="Sign in"
          labelStyle={{textTransform: 'capitalize'}}
          onPress={() => {
            console.log({email, password}); // TODO: remove this
          }}
          disabled={!isEnableSignIn()}
        />

        {/* Sign up link */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.darkGray,
            }}>
            Don't have an account?
          </Text>
          <TextButton
            buttonContainerStyle={{
              backgroundColor: COLORS.transparent,
              marginLeft: 2,
            }}
            label="Sign Up"
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          />
        </View>

        {/* Auth Providers */}
        <View style={{marginTop: SIZES.padding}}>
          {/* Facebook */}
          <TextIconButton
            icon={icons.fb}
            iconStyle={{tintColor: COLORS.white}}
            label="Continue with Facebook"
            labelStyle={{color: COLORS.white}}
            onPress={() => {}}
            containerStyle={{
              backgroundColor: COLORS.blue,
              height: 50,
              borderRadius: SIZES.radius,
            }}
          />

          <TextIconButton
            icon={icons.google}
            iconStyle={{}}
            label="Continue with Google"
            onPress={() => {}}
            containerStyle={{
              backgroundColor: COLORS.lightGray2,
              height: 50,
              borderRadius: SIZES.radius,
              marginTop: SIZES.radius,
            }}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default SignIn;
