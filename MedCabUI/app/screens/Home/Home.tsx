import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
  Header,
  HorizontalFoodCard,
  Section,
  VerticalFoodCard,
} from '../../components';

import {COLORS, dummyData, FONTS, icons, SIZES} from '../../constants';
import {HomeStackParamList} from '../../navigation/HomeStack';
import {AppStoreRootState} from '../../store';

import {setSelectedTab as selectTab} from '../../store/tab/actions';
import FilterModel from './FilterModel';

type HomeSccreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'> & {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  [x: string]: any;
};

const Home: React.FC<HomeSccreenProps> = ({
  navigation,
  selectedTab,
  // setSelectedTab,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [recommends, setRecommends] = React.useState([]);
  const [popular, setPopular] = React.useState([]);
  const [menuList, setMenuList] = React.useState<
    Array<{
      id: number;
      name: string;
      description: string;
      categories: number[];
      price: number;
      calories: number;
      isFavourite: boolean;
      image: any;
    }>
  >([]);
  const [showFilterModel, setShowFilterModel] = React.useState(false);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeCategory = (categoryId: number, menuTypeId: number) => {
    // Retrieve popular menu
    let selectedPopular = dummyData.menu.find(p => p.name === 'Popular');

    // Retrieve the recommended menu
    let selectedRecommend = dummyData.menu.find(m => m.name === 'Recommended');

    // Find menu based on menutypeid
    let selectedMenu = dummyData.menu.find(m => m.id === menuTypeId);

    // Set the popular menu based on categoryId
    setPopular(
      selectedPopular?.list.filter(p => p.categories.includes(categoryId)),
    );

    // Set recommended based on the categoryId
    setRecommends(
      selectedRecommend?.list.filter(r => r.categories.includes(categoryId)),
    );

    // Select menu based on category id
    setMenuList(
      selectedMenu?.list.filter(m => m.categories.includes(categoryId)),
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}>
        {/* icon */}
        <Image
          source={icons.search}
          style={{width: 18, height: 18, tintColor: COLORS.gray}}
        />

        {/* input */}
        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.base,
            ...FONTS.body3,
            paddingVertical: 0,
          }}
          placeholder="search food now"
        />

        {/* filter */}
        <TouchableOpacity
          onPress={() => {
            setShowFilterModel(true);
          }}
          style={{paddingHorizontal: 4}}>
          <Image
            source={icons.filter}
            style={{width: 18, height: 18, tintColor: COLORS.gray}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderMenuTypes = () => {
    return (
      <FlatList
        data={dummyData.menu}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginBottom: 20, marginTop: 30}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index === dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}>
              <Text
                style={{
                  color:
                    selectedMenuType === item.id
                      ? COLORS.primary
                      : COLORS.black,
                  ...FONTS.h4,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderRecommendedSection = () => {
    return (
      <Section
        title="Recommended"
        onPress={() => {
          console.log('show recommended');
        }}>
        <FlatList
          data={recommends}
          keyExtractor={item => (item?.id as string).toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight:
                    index === recommends.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: 'center',
                }}
                imageStyle={{marginTop: 35, height: 150, width: 150}}
                item={item}
                onPress={() => {
                  navigation.navigate('FoodDetail', {item});
                }}
              />
            );
          }}
        />
      </Section>
    );
  };

  const renderPopularSection = () => {
    return (
      <Section
        title="Popular Near You"
        onPress={() => {
          console.log('Popular section');
        }}>
        <FlatList
          data={popular}
          keyExtractor={item => (item?.id as string).toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <VerticalFoodCard
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight:
                    index === recommends.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: 'center',
                }}
                imageStyle={{marginTop: 35, height: 150, width: 150}}
                item={item}
                onPress={() => {
                  navigation.navigate('FoodDetail', {item});
                }}
              />
            );
          }}
        />
      </Section>
    );
  };

  const renderFoodCategories = () => {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => item?.id?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setSelectedCategoryId(item.id);
                handleChangeCategory(item.id, selectedMenuType);
              }}
              style={{
                flexDirection: 'row',
                height: 45,
                marginTop: SIZES.padding,
                marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
                marginRight:
                  index === dummyData.categories.length - 1 ? SIZES.padding : 0,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor:
                  selectedCategoryId === item.id
                    ? COLORS.primary
                    : COLORS.lightGray2,
              }}>
              <Image
                source={item.icon}
                style={{
                  marginTop: 5,
                  height: 50,
                  width: 50,
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  marginRight: SIZES.base,
                  color:
                    selectedCategoryId === item.id
                      ? COLORS.white
                      : COLORS.darkGray,
                  ...FONTS.h3,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const renderDeliveryTo = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h3,
            textTransform: 'uppercase',
          }}>
          Delivery To
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.h3}}>{dummyData.myProfile.address}</Text>
          <Image
            style={{marginLeft: SIZES.base, height: 20, width: 20}}
            source={icons.down_arrow}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          height: 40,
          marginTop: 12,
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}
        LeftComponent={
          <TouchableOpacity
            onPress={() => {
              (navigation as unknown as DrawerNavigationProp<any>).openDrawer();
            }}
            style={{
              width: 32,
              height: 32,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        title={selectedTab.toUpperCase()}
        RightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{width: 36, height: 36, borderRadius: SIZES.radius}}
            />
          </TouchableOpacity>
        }
      />

      {/* Render Search */}
      {renderSearch()}

      {showFilterModel && (
        <FilterModel
          isVisible={showFilterModel}
          onClose={() => {
            setShowFilterModel(false);
          }}
        />
      )}

      {/* other */}
      <FlatList
        ListHeaderComponent={
          <View>
            {/* Delivery to */}
            {renderDeliveryTo()}

            {/* Food categories */}
            {renderFoodCategories()}

            {/* Popular */}
            {renderPopularSection()}

            {/* Recommended */}
            {renderRecommendedSection()}

            {/* Menu Type */}
            {renderMenuTypes()}
          </View>
        }
        data={menuList}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <HorizontalFoodCard
              containerStyle={{
                height: 130,
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
              }}
              imageStyle={{
                height: 100,
                width: 100,
                marginTop: 20,
              }}
              item={item}
              onPress={() => {
                navigation.navigate('FoodDetail', {item});
              }}
            />
          );
        }}
        ListFooterComponent={<View style={{height: 120}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
