import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as Notifications from 'expo-notifications'

import remindersService from '../../../services/reminders.service';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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

  const [reminders, setReminders] = useState([]);
  const [selectedReminderId, setSelectedReminderId] = useState(null);

  useEffect(() => {
    console.log('passou')
    remindersService.getReminders().then(
      (response) => {
        const data = response.data;
        setReminders(data);
        // Create a notification for each reminder
        data.forEach((reminder) => {
          const time = new Date(reminder.time);
          // Schedule a notification using the time from the reminder
          Notifications.scheduleNotificationAsync({
            content: {
              title: 'Hora do remédio!',
              body: `O seu medicamento para usar agora é: ${reminder.medicine}`,
              // You can customize the notification content here
            },
            trigger: {
              seconds: (time.getTime() - Date.now()) / 1000,
            },
          });
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const deleteReminderById = (reminderId) => {
    remindersService.deleteReminder(reminderId)
      .then(() => {
        console.log("Reminder deleted successfully");
        setModalVisible(false);
        // Refresh the reminders list after deletion
        refreshReminders();
      })
      .catch((error) => {
        console.error("Error deleting reminder:", error);
      });
  };

  const refreshReminders = () => {
    remindersService.getReminders()
      .then((response) => {
        const data = response.data;
        setReminders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <TouchableOpacity
        onPress={() => {
          setSelectedReminderId(item._id);
          setModalVisible(true);
        }}
        style={styles.item}
      >
        <View style={styles.item1}>
          <Text style={styles.title}>{item.medicine}</Text>
          <Text style={styles.title}>{`${new Date(item.time).getHours()}:${new Date(item.time).getMinutes().toString().padStart(2, '0')}`}</Text>
        </View>
        {/* <View style={[styles.item2, { backgroundColor }]} /> */}
      </TouchableOpacity>
    );
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FlatList
        data={reminders}
        renderItem={renderItem}
        keyExtractor={item => item._id}
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
              <LinearGradient style={[styles.button, styles.buttonClose]} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Voltar</Text>
                </Pressable>
              </LinearGradient>

              <LinearGradient style={[styles.button, styles.buttonOpen]} colors={['#F587A2', '#9A0025']}>
                <Pressable onPress={() => deleteReminderById(selectedReminderId)}>
                  <Text style={styles.textStyle}>Deletar</Text>
                </Pressable>
              </LinearGradient>
     
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 80,
    height: 50
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
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

});

export default ScheduleList;
