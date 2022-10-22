import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from '../constants';

import {
  AddCard,
  Checkout,
  DeliveryMap,
  DeliveryStatus,
  FoodDetail,
  Home,
  MyCard,
  MyCart,
  Restaurant,
  Success,
} from '../screens';

export type HomeStackParamList = {
  Home: undefined;
  FoodDetail: {
    item?: {
      id: number;
      name: string;
      description: string;
      categories: number[];
      price: number;
      calories: number;
      isFavourite: boolean;
      image: any;
    };
  };
  Restaurant: undefined;
  MyCart: undefined;
  Success: undefined;
  MyCard: undefined;
  AddCard: {
    item?: {
      id: number;
      name: string;
      icon: any;
      card_no?: string;
      key?: string;
    };
  };
  Checkout: {
    item?: {
      id: number;
      name: string;
      icon: any;
      card_no?: string;
      key?: string;
    };
  };
  DeliveryStatus: undefined;
  DeliveryMap: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = ({}) => {
  return (
    <React.Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <HomeStack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="FoodDetail" component={FoodDetail} />
        <HomeStack.Screen name="Restaurant" component={Restaurant} />
        <HomeStack.Screen
          name="MyCart"
          component={MyCart}
          options={{animation: 'slide_from_right'}}
        />
        <HomeStack.Screen
          name="MyCard"
          component={MyCard}
          options={{animation: 'slide_from_right'}}
        />
        <HomeStack.Screen
          name="AddCard"
          component={AddCard}
          options={{animation: 'slide_from_right'}}
        />
        <HomeStack.Screen
          name="Checkout"
          component={Checkout}
          options={{animation: 'slide_from_right'}}
        />
        <HomeStack.Screen
          name="Success"
          component={Success}
          options={{animation: 'slide_from_bottom'}}
        />
        <HomeStack.Screen
          name="DeliveryStatus"
          component={DeliveryStatus}
          options={{animation: 'slide_from_right'}}
        />
        <HomeStack.Screen
          name="DeliveryMap"
          component={DeliveryMap}
          options={{animation: 'slide_from_right'}}
        />
      </HomeStack.Navigator>
    </React.Fragment>
  );
};

export default HomeStackNavigator;
