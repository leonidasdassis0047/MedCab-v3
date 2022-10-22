import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS, FONTS, SIZES} from '../constants';

type TabButtonProps = {
  icon: ImageSourcePropType;
  label: string;
  isFocused: boolean;
  onPress: () => void;
  innerContainerStyle: StyleProp<ViewStyle>;
  outerContainerStyle: StyleProp<ViewStyle>;
};

const TabButton: React.FC<TabButtonProps> = ({
  icon,
  isFocused,
  label,
  onPress,
  innerContainerStyle,
  outerContainerStyle,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={[
          {flex: 1, alignSelf: 'center', justifyContent: 'center'},
          outerContainerStyle,
        ]}>
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              height: 40,
              width: '80%',
              borderRadius: 32,
              alignItems: 'center',
              justifyContent: 'center',
            },
            innerContainerStyle,
          ]}>
          <Image
            source={icon}
            style={{
              width: 18,
              height: 18,
              tintColor: isFocused ? COLORS.white : COLORS.gray,
            }}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                marginLeft: SIZES.base,
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default TabButton;
