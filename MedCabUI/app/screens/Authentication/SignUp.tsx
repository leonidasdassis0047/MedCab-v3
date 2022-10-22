import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AuthLayout} from '..';
import {FormInput, TextButton, TextIconButton} from '../../components';
import {COLORS, FONTS, icons, SIZES} from '../../constants';
import {AuthNavigationParamList} from '../../navigation/AuthNavigation';
import {utils} from '../../utils';

type SignUpProps = NativeStackScreenProps<AuthNavigationParamList, 'SignUp'>;

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [email, setEmail] = React.useState<string>('');
  const [emailError, setEmailError] = React.useState<string>('');
  const [username, setUsername] = React.useState<string>('');
  const [usernameError, setUsernameError] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [passwordError, setPasswordError] = React.useState<string>('');

  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  const isEnableSignUp = () => {
    return (
      email !== '' &&
      username !== '' &&
      password !== '' &&
      emailError === '' &&
      usernameError === '' &&
      passwordError === ''
    );
  };

  return (
    <AuthLayout
      title="Getting Started"
      subTitle="Create an account to continue with us">
      <View style={{flex: 1, marginTop: SIZES.padding}}>
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
          label="Username"
          keyboardType="default"
          autoComplete="name"
          placeholder="Username"
          onChangeText={text => {
            utils.validateUsername(text, setUsernameError);
            setUsername(text);
          }}
          value={username}
          error={usernameError}
          containerStyle={{marginTop: SIZES.radius}}
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
                    username === ''
                      ? COLORS.gray
                      : username !== '' && usernameError === ''
                      ? COLORS.green
                      : COLORS.red,
                }}
                source={
                  username === '' || (username !== '' && usernameError === '')
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
            utils.validatePassword(text, setPasswordError);
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

        {/* Sign up & Sign in */}
        <TextButton
          buttonContainerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: (isEnableSignUp() as boolean)
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
          label="Create account"
          labelStyle={{textTransform: 'capitalize'}}
          onPress={() => {
            navigation.navigate('OTP', {email});
          }}
          disabled={!isEnableSignUp()}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}>
            Already have an account?{' '}
          </Text>
          <TextButton
            label="Sign In"
            labelStyle={{color: COLORS.primary, ...FONTS.h3}}
            buttonContainerStyle={{
              backgroundColor: COLORS.transparent,
            }}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          />
        </View>
      </View>

      {/* Footer */}
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
    </AuthLayout>
  );
};

export default SignUp;
