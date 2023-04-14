import {StyleSheet, Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pindah} from '../../App';
import React from 'react';

const Splash = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Pindah>>();
  setTimeout(() => {
    navigation.replace('Homeapp');
  }, 2000);
  return (
    <View
      style={{
        backgroundColor: '#00FF2A',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{
          width: 50,
          height: 50,
        }}
        source={require('../assets/icon/notes.png')}
      />
      <Text style={{fontFamily: 'Anton-Regular', fontSize: 30, color: 'white'}}>
        nottes
      </Text>
      <Text
        style={{fontSize: 40, color: 'white', top: 250, fontWeight: 'bold'}}>
        By:Fatih
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
