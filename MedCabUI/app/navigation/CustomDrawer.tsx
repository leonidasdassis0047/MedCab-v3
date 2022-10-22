import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
// import * as Animated from 'react-native-reanimated';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';

import {COLORS} from '../constants';
import {MainLayout} from '../screens';
import CustomDrawerContent from './CustomDrawerContent';
import {AppStoreRootState} from '../store';
import {setSelectedTab as selectTab} from '../store/tab/actions';

export type DrawerNavigatorParamList = {
  MainLayout: undefined;
};

const DrawerNavigator = createDrawerNavigator<DrawerNavigatorParamList>();

type CustomDrawerProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  //   const [progress, setProgress] = React.useState(new Animated.Value(0));

  //   const scale = Animated.interpolateNode(progress, {
  //     inputRange: [0, 1],
  //     outputRange: [1, 0.8],
  //   });

  //   const borderRadius = Animated.interpolateNode(progress, {
  //     inputRange: [0, 1],
  //     outputRange: [0, 24],
  //   });

  //   const animatedStyles = {borderRadius, transform: [{scale}]};

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.primary} />
      <DrawerNavigator.Navigator
        initialRouteName="MainLayout"
        drawerContent={({navigation}) => {
          return (
            <CustomDrawerContent
              navigation={navigation}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          );
        }}
        screenOptions={{
          drawerType: 'slide',
          overlayColor: COLORS.transparent,
          headerShown: false,
          drawerStyle: {
            backgroundColor: COLORS.transparent,
            flex: 1,
            paddingRight: 8,
            width: '64%',
          },
          sceneContainerStyle: {
            backgroundColor: COLORS.transparent,
          },
        }}>
        <DrawerNavigator.Screen name="MainLayout">
          {props => {
            return <MainLayout {...props} navigation={props.navigation} />;
          }}
        </DrawerNavigator.Screen>
      </DrawerNavigator.Navigator>
    </View>
  );
};

// export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
