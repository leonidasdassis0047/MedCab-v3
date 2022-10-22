import {DrawerNavigationProp} from '@react-navigation/drawer';
import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

import {CartTab, Favourite, Notification, Search} from '.';
import {TabButton} from '../components';
import {COLORS, constants, icons, SIZES} from '../constants';
import HomeStackNavigator from '../navigation/HomeStack';
import {AppStoreRootState} from '../store';
import {setSelectedTab as selectTab} from '../store/tab/actions';

type MainLayoutProps = {
  drawerAnimationStyle?: any;
  navigation: DrawerNavigationProp<any>;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  [x: string]: any;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  drawerAnimationStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {
  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flatListRef = React.useRef<any>();

  React.useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({index: 0, animated: false});
      homeTabFlex.value = withTiming(4, {duration: 500});
      homeTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      homeTabFlex.value = withTiming(1, {duration: 500});
      homeTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({index: 1, animated: false});
      searchTabFlex.value = withTiming(4, {duration: 500});
      searchTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      searchTabFlex.value = withTiming(1, {duration: 500});
      searchTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({index: 2, animated: false});
      cartTabFlex.value = withTiming(4, {duration: 500});
      cartTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      cartTabFlex.value = withTiming(1, {duration: 500});
      cartTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab === constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({index: 3, animated: false});
      favouriteTabFlex.value = withTiming(4, {duration: 500});
      favouriteTabColor.value = withTiming(COLORS.primary, {duration: 500});
    } else {
      favouriteTabFlex.value = withTiming(1, {duration: 500});
      favouriteTabColor.value = withTiming(COLORS.white, {duration: 500});
    }

    if (selectedTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({index: 4, animated: false});
      notificationTabFlex.value = withTiming(4, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.primary, {
        duration: 500,
      });
    } else {
      notificationTabFlex.value = withTiming(1, {duration: 500});
      notificationTabColor.value = withTiming(COLORS.white, {
        duration: 500,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  // Reanimated Shared value.
  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  const homeFlexStyle = useAnimatedStyle(() => ({flex: homeTabFlex.value}));
  const homeColorStyle = useAnimatedStyle(() => ({
    backgroundColor: homeTabColor.value,
  }));

  const searchFlexStyle = useAnimatedStyle(() => ({flex: searchTabFlex.value}));
  const searchColorStyle = useAnimatedStyle(() => ({
    backgroundColor: searchTabColor.value,
  }));

  const cartFlexStyle = useAnimatedStyle(() => ({flex: cartTabFlex.value}));
  const cartColorStyle = useAnimatedStyle(() => ({
    backgroundColor: cartTabColor.value,
  }));

  const favouriteFlexStyle = useAnimatedStyle(() => ({
    flex: favouriteTabFlex.value,
  }));
  const favouriteColorStyle = useAnimatedStyle(() => ({
    backgroundColor: favouriteTabColor.value,
  }));

  const notificationFlexStyle = useAnimatedStyle(() => ({
    flex: notificationTabFlex.value,
  }));
  const notificationColorStyle = useAnimatedStyle(() => ({
    backgroundColor: notificationTabColor.value,
  }));

  return (
    <React.Fragment>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
      <Animated.View style={[styles.screen, drawerAnimationStyle]}>
        {/* Header */}

        {/* Content / screens */}
        <View style={{flex: 1}}>
          <FlatList
            ref={flatListRef}
            data={constants.bottom_tabs}
            horizontal
            scrollEnabled={false}
            snapToAlignment="center"
            snapToInterval={SIZES.width}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{height: SIZES.height, width: SIZES.width}}>
                  {item.label === constants.screens.home && (
                    <HomeStackNavigator />
                  )}
                  {item.label === constants.screens.search && <Search />}
                  {item.label === constants.screens.cart && <CartTab />}
                  {item.label === constants.screens.favourite && <Favourite />}
                  {item.label === constants.screens.notification && (
                    <Notification />
                  )}
                </View>
              );
            }}
          />
        </View>

        {/* BottomTabs */}
        <View
          style={{
            height: 60,
            justifyContent: 'flex-end',
            // backgroundColor: 'dodgerblue',
          }}>
          {/* LinearGradient component for shadow effect*/}
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 4}}
            colors={[COLORS.transparent, COLORS.gray2]}
            style={{
              position: 'absolute',
              top: -20,
              left: 0,
              right: 0,
              height: 60,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          />

          {/* Tabs */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingHorizontal: SIZES.radius,
              paddingBottom: 4,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              backgroundColor: COLORS.white,
            }}>
            <TabButton
              label={constants.screens.home}
              icon={icons.home}
              isFocused={selectedTab === constants.screens.home}
              onPress={() => {
                setSelectedTab(constants.screens.home);
              }}
              innerContainerStyle={homeColorStyle}
              outerContainerStyle={homeFlexStyle}
            />
            <TabButton
              label={constants.screens.search}
              icon={icons.search}
              isFocused={selectedTab === constants.screens.search}
              onPress={() => {
                setSelectedTab(constants.screens.search);
              }}
              innerContainerStyle={searchColorStyle}
              outerContainerStyle={searchFlexStyle}
            />
            <TabButton
              label={constants.screens.cart}
              icon={icons.cart}
              isFocused={selectedTab === constants.screens.cart}
              onPress={() => {
                setSelectedTab(constants.screens.cart);
              }}
              innerContainerStyle={cartColorStyle}
              outerContainerStyle={cartFlexStyle}
            />
            <TabButton
              label={constants.screens.favourite}
              icon={icons.favourite}
              isFocused={selectedTab === constants.screens.favourite}
              onPress={() => {
                setSelectedTab(constants.screens.favourite);
              }}
              innerContainerStyle={favouriteColorStyle}
              outerContainerStyle={favouriteFlexStyle}
            />
            <TabButton
              label={constants.screens.notification}
              icon={icons.notification}
              isFocused={selectedTab === constants.screens.notification}
              onPress={() => {
                setSelectedTab(constants.screens.notification);
              }}
              innerContainerStyle={notificationColorStyle}
              outerContainerStyle={notificationFlexStyle}
            />
          </View>
        </View>
      </Animated.View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
});

const mapStateToProps = (state: AppStoreRootState) => {
  return {
    selectedTab: state.selectTab.selectedTab,
  };
};

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setSelectedTab: (tab: string) => {
      return dispatch(selectTab(tab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
