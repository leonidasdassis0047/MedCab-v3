import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

type CardItemProps = {
  item: {
    id: number;
    name: string;
    icon: any;
    card_no?: string;
    key?: 'MyCard' | 'NewCard';
  };
  isSelected: boolean;
  onPress: () => void;
};

const CardItem: React.FC<CardItemProps> = ({isSelected, item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        height: 90,
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.padding,
        borderWidth: 2,
        borderRadius: SIZES.base,
        borderColor: isSelected ? COLORS.primary : COLORS.lightGray2,
      }}>
      {/* Card Image */}
      <View
        style={{
          height: 46,
          width: 60,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderRadius: SIZES.radius,
          borderColor: COLORS.lightGray2,
        }}>
        <Image
          source={item.icon}
          resizeMode="center"
          style={{height: 36, width: 36}}
        />
      </View>

      {/* Card Name */}
      <Text style={{...FONTS.h3, flex: 1, marginLeft: SIZES.radius}}>
        {item.name}
      </Text>

      {/* Radio button */}
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        resizeMode="center"
        style={{height: 24, width: 24}}
      />
    </TouchableOpacity>
  );
};

export default CardItem;
