import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, FONTS, images, SIZES} from '../../constants';

type AuthLayoutProps = {
  children: React.ReactNode;
  titleContainerStyle?: StyleProp<ViewStyle>;
  subTitle: string;
  title: string;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
  subTitle,
  title,
  titleContainerStyle,
  children,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: SIZES.radius,
      }}>
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 30,
          flexGrow: 1,
        }}
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
          }}>
          {/* App Logo */}
          <Image
            resizeMode="contain"
            source={images.logo_02}
            style={{width: 200, height: 100}}
          />
        </View>

        {/* Title & Subtitle */}
        <View style={[{marginTop: SIZES.padding}, titleContainerStyle]}>
          <Text style={{textAlign: 'center', ...FONTS.h2}}>{title}</Text>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.gray,
              marginTop: SIZES.base,
              ...FONTS.body3,
            }}>
            {subTitle}
          </Text>
        </View>

        {/* children */}
        <KeyboardAvoidingView>{children}</KeyboardAvoidingView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
