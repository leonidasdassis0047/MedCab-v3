import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {FONTS} from '../constants';

type HeaderProps = {
  LeftComponent?: any;
  RightComponent?: any;
  containerStyle?: StyleProp<ViewStyle>;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
};

const Header: React.FC<HeaderProps> = ({
  containerStyle,
  LeftComponent,
  RightComponent,
  title,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left component */}
      {LeftComponent}
      {/* title */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={[
            {
              ...FONTS.h3,
              fontFamily: FONTS.h1.fontFamily,
              textTransform: 'uppercase',
            },
            titleStyle,
          ]}>
          {title}
        </Text>
      </View>
      {/* Right component */}
      {RightComponent}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
