import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import {ApolloProvider} from '@apollo/client';
import {client} from './app/graphql/apollo-client';
import {View} from 'react-native';
import {SIZES} from './app/constants';
import {FormInput} from './app/components';

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View style={{paddingHorizontal: SIZES.padding}}>
          <FormInput
            placeholder="Email address"
            inputContainerStyle={{borderRadius: SIZES.padding}}
          />
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
