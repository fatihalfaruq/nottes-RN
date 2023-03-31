import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Homeapp from './src/screen/Homeapp';
import Note1 from './src/screen/Note1';
import Note2 from './src/screen/Note2';
import Note3 from './src/screen/Note3';
import Note4 from './src/screen/Note4';
import Note5 from './src/screen/Note5';
import Splash from './src/screen/Splash';

const Stack = createNativeStackNavigator<Pindah>();

export type Pindah = {
  Homeapp: undefined;
  Note1: undefined;
  Note2: undefined;
  Note3: undefined;
  Note4: undefined;
  Note5: undefined;
  Splash: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Note5"
          component={Note5}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Homeapp"
          component={Homeapp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Note1"
          component={Note1}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Note2"
          component={Note2}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Note3"
          component={Note3}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Note4"
          component={Note4}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Note from './src/components/Note';

// const App = () => {
//   return <Note />;
// };

// export default App;

// const styles = StyleSheet.create({});
