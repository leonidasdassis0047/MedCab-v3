import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from '../constants';

import {
  ForgotPasswordScreen,
  OnBoarding,
  OTPScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens';

export type AuthNavigationParamList = {
  OnBoarding: undefined;
  ForgotPassword: undefined;
  SignIn: undefined;
  SignUp: undefined;
  OTP: {
    email?: string;
  };
};

const Stack = createNativeStackNavigator<AuthNavigationParamList>();

const AuthNavigation = ({}) => {
  return (
    <React.Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'OnBoarding'}>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{animationTypeForReplace: 'pop'}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{animation: 'fade'}}
        />

        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        <Stack.Screen name="OTP" component={OTPScreen} />
      </Stack.Navigator>
    </React.Fragment>
  );
};

export default AuthNavigation;
