import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  {
    id: '1',
    title: 'Dipirona',
    time: '08:30'
  },
  {
    id: '2',
    title: 'Vitaminas A e B',
    time: '08:00'
  },
  {
    id: '3',
    title: 'Pracetamol',
    time: '08:45'
  },
  {
    id: '4',
    title: 'Pracetamol',
    time: '08:45'
  },
];

const ScheduleList = () => {
  // const [selectedId, setSelectedId] = useState(null);
  // const colors = ['#90F587', '#F587A2', '#EFC16C'];
  // const initialColorIndex = 0;
  // const [itemColors, setItemColors] = useState(
  //   DATA.reduce((acc, item) => {
  //     acc[item.id] = initialColorIndex;
  //     return acc;
  //   }, {})
  // );

  const renderItem = ({ item }) => {
    // const isSelected = item.id === selectedId;
    // const backgroundColor = colors[itemColors[item.id]];

    // const onPressItem = () => {
    //   setSelectedId(isSelected ? null : item.id);
    //   const nextColorIndex = (itemColors[item.id] + 1) % colors.length;
    //   setItemColors((prevItemColors) => ({
    //     ...prevItemColors,
    //     [item.id]: nextColorIndex,
    //   }));
    // };
    return (
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.item}>
        <View style={styles.item1}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title}>{item.time}</Text>
        </View>
        {/* <View style={[styles.item2, { backgroundColor }]} /> */}
      </TouchableOpacity>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        vertical
      />
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOpen]}
              >
                <Text style={styles.textStyle}>Deletar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
  },
  item: {
    paddingLeft: 16,
    marginVertical: 5,
    borderRadius: 10,
    borderBottomRightRadius: 30,
    height: 70,
    flexDirection: 'row',
    backgroundColor: 'rgba(36, 121, 175, 1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,

    marginLeft:20,
    marginRight:20,
  },
  item1: {
    flex: 6,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 18,
  },
  item2: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 30,
    height: 70,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: 200,
    height: 130,
    margin: 20,
    backgroundColor: "rgba(36, 121, 175, 1)",
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F587A2',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});

export default ScheduleList;
