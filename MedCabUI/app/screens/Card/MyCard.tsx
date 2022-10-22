import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {CardItem, Header, IconButton, TextButton} from '../../components';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../navigation/HomeStack';

type MyCardProps = NativeStackScreenProps<HomeStackParamList, 'MyCard'> & {};

const MyCard: React.FC<MyCardProps> = ({navigation}) => {
  const [selectedCard, setSelectedCard] = React.useState<null | {
    id: number;
    name: string;
    icon: any;
    card_no?: string;
    key?: string;
  }>(null);

  // Render Header *******************************************************************************
  const renderHeader = () => {
    return (
      <Header
        title="My Cards"
        containerStyle={{
          height: 42,
          paddingHorizontal: SIZES.padding,
          marginTop: 20,
        }}
        LeftComponent={
          <IconButton
            icon={icons.back}
            onPress={() => {
              navigation.goBack();
            }}
            containerStyle={{}}
          />
        }
        RightComponent={<View style={{width: 40}} />}
      />
    );
  };

  const renderMyCards = () => {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`${item.id}-${index}`}
              item={item}
              onPress={() => {
                setSelectedCard({...item, key: 'MyCard'});
              }}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ===
                `MyCard-${item.id}`
              }
            />
          );
        })}
      </View>
    );
  };

  const renderNewCards = () => {
    return (
      <View style={{marginTop: SIZES.padding}}>
        <Text style={{...FONTS.h3}}>Add New Card</Text>

        <View>
          {dummyData.allCards.map((item, index) => {
            return (
              <CardItem
                key={`${item.id}-${index}`}
                item={item}
                onPress={() => {
                  setSelectedCard({...item, key: 'NewCard'});
                }}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ===
                  `NewCard-${item.id}`
                }
              />
            );
          })}
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 3,
        }}>
        <TextButton
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard === null ? COLORS.gray : COLORS.primary,
          }}
          disabled={selectedCard === null}
          label={selectedCard?.key === 'NewCard' ? 'Add Card' : 'Place Order'}
          onPress={() => {
            selectedCard?.key === 'NewCard'
              ? navigation.navigate('AddCard', {item: selectedCard})
              : navigation.navigate('Checkout', {item: selectedCard as any});
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      {renderHeader()}

      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}>
        {/* My cards */}
        {renderMyCards()}

        {/* Add New Cards */}
        {renderNewCards()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  screen: {backgroundColor: COLORS.white, flex: 1},
});
