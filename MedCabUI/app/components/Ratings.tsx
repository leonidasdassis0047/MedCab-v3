import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {COLORS, icons} from '../constants';

type Props = {
  rating: number;
  iconStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  activeColor?: string;
  inActiveColor?: string;
};

const Ratings: React.FC<Props> = ({
  rating,
  activeColor = COLORS.orange,
  inActiveColor = COLORS.lightOrange3,
  iconStyle,
  containerStyle,
}) => {
  return (
    <View style={[{flexDirection: 'row'}, containerStyle]}>
      <Image
        source={icons.star}
        style={[
          styles.icon,
          {
            tintColor: rating >= 1 ? activeColor : inActiveColor,
          },
          iconStyle,
        ]}
      />
      <Image
        source={icons.star}
        style={[
          styles.icon,
          {
            tintColor: rating >= 2 ? activeColor : inActiveColor,
          },
          iconStyle,
        ]}
      />
      <Image
        source={icons.star}
        style={[
          styles.icon,
          {
            tintColor: rating >= 3 ? activeColor : inActiveColor,
          },
          iconStyle,
        ]}
      />
      <Image
        source={icons.star}
        style={[
          styles.icon,
          {
            tintColor: rating >= 4 ? activeColor : inActiveColor,
          },
          iconStyle,
        ]}
      />
      <Image
        source={icons.star}
        style={[
          styles.icon,
          {
            tintColor: rating >= 5 ? activeColor : inActiveColor,
          },
          iconStyle,
        ]}
      />
    </View>
  );
};

export default Ratings;

const styles = StyleSheet.create({
  icon: {
    height: 12,
    width: 12,
  },
});
