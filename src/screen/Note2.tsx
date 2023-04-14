import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface item {
  item: string;
}

const Note2 = () => {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<item[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);

  const create = (text: string) => {
    setData(prev => {
      const newData = [...prev, {item: text}];
      console.log(newData);
      saveDate(newData);
      return newData;
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const saveDate = async (value: Array<{item: string}>) => {
    try {
      await AsyncStorage.setItem('database2', JSON.stringify(value));
    } catch (o) {
      console.log('save data error', o);
    }
  };

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('database2');
      if (value !== null) {
        const perseValue = JSON.parse(value);
        console.log(perseValue);
        setData(perseValue);
      }
    } catch (error) {
      console.log('get data error', error);
    }
  };

  const editData = () => {
    const newData = [...data];
    newData[index].item = text;
    setData(newData);
    setText('');
    setEditMode(false);
    saveDate(newData);
  };

  const deleteData = () => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    saveDate(newData);
    setEditMode(false);
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#00FF2A',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: wp('7%'),
          fontFamily: 'Anton-Regular',
          color: 'blue',
          top: 8,
        }}>
        note 2
      </Text>
      <View
        style={{
          backgroundColor: '#C5E1A5',
          width: wp('90%'),
          height: hp('75%'),
          top: 20,
          borderRadius: 30,
          borderWidth: 10,
          borderColor: '#B2FF59',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((value, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                margin: 10,
                width: 300,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setText(value.item);
                  setIndex(index);
                  setEditMode(true);
                }}>
                <View style={{}}>
                  <Text style={{fontSize: 18, color: 'blue'}}>
                    {value.item}
                  </Text>
                </View>
              </TouchableOpacity>

              <View>
                <TouchableOpacity
                  style={{width: 30, height: 30}}
                  onPress={() => {
                    setIndex(index);
                    deleteData();
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: 'red',
                      bottom: 7,
                      left: 5,
                    }}>
                    x
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 42,
          width: wp('81%'),
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#B2FF59',
          height: hp('6%'),
        }}>
        <TextInput
          style={{left: 20, position: 'absolute', width: wp('60%')}}
          value={text}
          onChangeText={f => setText(f)}
          placeholder="Mulai catat"
        />
        {editMode ? (
          <View
            style={{
              backgroundColor: '#448AFF',
              alignItems: 'center',
              justifyContent: 'center',
              width: wp('14%'),
              height: hp('5%'),
              left: wp('66%'),
              borderRadius: 20,
            }}>
            <TouchableOpacity
              onPress={() => (editMode ? editData() : create(text))}>
              <Text
                style={{
                  fontSize: wp('5%'),
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                edit
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: '#448AFF',
              width: wp('14%'),
              height: hp('5%'),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              left: wp('66%'),
            }}>
            <TouchableOpacity
              onPress={() => (editMode ? editData() : create(text))}>
              <Text
                style={{
                  fontSize: wp('5%'),
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                input
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Note2;

const styles = StyleSheet.create({});
