import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pindah} from '../../App';

const Homeapp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Pindah>>();
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B2FF59',
        height: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#00FF2A',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          flexDirection: 'row',
          bottom: 20,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#1A237E'}}>
          nottes
        </Text>
        <Image
          style={{
            width: 30,
            height: 30,
            left: 20,
          }}
          source={require('../assets/icon/notes.png')}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Note1')}>
        <View
          style={{
            backgroundColor: '#C5E1A5',
            width: 370,
            height: 100,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}>
          <Image
            style={{width: 80, height: 80, left: 10}}
            source={require('../assets/icon/writing.png')}
          />
          <Text
            style={{
              fontSize: 25,
              left: 30,
              fontWeight: 'bold',
              color: '#1A237E',
            }}>
            Note 1
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Note2')}>
        <View
          style={{
            backgroundColor: '#C5E1A5',
            width: 370,
            height: 100,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}>
          <Image
            style={{width: 80, height: 80, left: 10}}
            source={require('../assets/icon/writing.png')}
          />
          <Text
            style={{
              fontSize: 25,
              left: 30,
              fontWeight: 'bold',
              color: '#1A237E',
            }}>
            Note 2
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Note3')}>
        <View
          style={{
            backgroundColor: '#C5E1A5',
            width: 370,
            height: 100,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}>
          <Image
            style={{width: 80, height: 80, left: 10}}
            source={require('../assets/icon/writing.png')}
          />
          <Text
            style={{
              fontSize: 25,
              left: 30,
              fontWeight: 'bold',
              color: '#1A237E',
            }}>
            Note 3
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Note4')}>
        <View
          style={{
            backgroundColor: '#C5E1A5',
            width: 370,
            height: 100,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}>
          <Image
            style={{width: 80, height: 80, left: 10}}
            source={require('../assets/icon/writing.png')}
          />
          <Text
            style={{
              fontSize: 25,
              left: 30,
              fontWeight: 'bold',
              color: '#1A237E',
            }}>
            Note 4
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Note5')}>
        <View
          style={{
            backgroundColor: '#C5E1A5',
            width: 370,
            height: 100,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
          }}>
          <Image
            style={{width: 80, height: 80, left: 10}}
            source={require('../assets/icon/writing.png')}
          />
          <Text
            style={{
              fontSize: 25,
              left: 30,
              fontWeight: 'bold',
              color: '#1A237E',
            }}>
            Note 5
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Homeapp;

const styles = StyleSheet.create({});
