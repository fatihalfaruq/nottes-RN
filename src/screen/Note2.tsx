import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
      await AsyncStorage.setItem('database', JSON.stringify(value));
    } catch (o) {
      console.log('save data error', o);
    }
  };

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('database');
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
          fontSize: 26,
          fontFamily: 'Anton-Regular',
          color: 'blue',
          top: 8,
        }}>
        note 2
      </Text>
      <View
        style={{
          backgroundColor: '#C5E1A5',
          width: 350,
          height: 600,
          top: 20,
          borderRadius: 30,
          borderWidth: 10,
          borderColor: '#B2FF59',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map((value, index) => (
            <View
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

              <TouchableOpacity
                onPress={() => {
                  setIndex(index);
                  deleteData();
                }}>
                <View>
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
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 42,
          width: 350,
          borderRadius: 30,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#B2FF59',
          height: 50,
        }}>
        <TextInput
          style={{left: 20, position: 'absolute', width: 250}}
          value={text}
          onChangeText={f => setText(f)}
          placeholder="Mulai catat"
        />
        {editMode ? (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}>
            <View
              style={{
                backgroundColor: '#448AFF',
                width: 60,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                left: 285,
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                edit
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => (editMode ? editData() : create(text))}>
            <View
              style={{
                backgroundColor: '#448AFF',
                width: 60,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                left: 285,
                borderRadius: 20,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                input
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Note2;

const styles = StyleSheet.create({});
