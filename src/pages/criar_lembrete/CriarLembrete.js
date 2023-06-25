import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView, VirtualizedList, Button} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import back from "../../../assets/back.png"
import calendario from "../../../assets/calendario.png"
import Alarm from "../../../assets/Alarm.png"

import remindersService from '../../services/reminders.service';

export default function CriarLembrete({navigation}){

    const [medicine, setMedicine] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [frequency, setFrequency] = useState("a cada 4 horas")
    console.log(medicine)
    console.log(startDate)
    console.log(endDate)
    console.log(time)
    console.log(frequency)

    const handleReminder = async () => {
        try {
          await remindersService.addReminder(medicine, startDate, endDate, time, frequency);
          console.log("Add Reminder");
          navigation.replace('HomeRoute');
          navigation.goBack();
        } catch (error) {
          console.log(error);
        }
    };
      
const [frequencia, setFrequencia] = useState('a cada 4 horas');
const [inicio, setInicio] = useState(new Date())
const [termino, setTermino] = useState(new Date())

const [showInicio, setShowInicio] = useState(false)
const [showTermino, setShowTermino] = useState(false)

const onChange1 = (inicio, datainicio) => {
    setStartDate(datainicio);
    setShowInicio(false);
};
const onChange2 = (termino, datatermino) => {
    setEndDate(datatermino);
    setShowTermino(false);
};
const showDatepicker1 = () => {
    setShowInicio(true);
};
const showDatepicker2 = () => {
    setShowTermino(true);
};


const [horario, setHorario] = useState(new Date())
const [showHorario, setShowHorario] = useState(false)

const onChange3 = (horario, datahorario) => {
    setTime(datahorario);
    setShowHorario(false);
};
const showDatepicker3 = () => {
    setShowHorario(true);
};


    return (

        <SafeAreaView>
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}> 
                    <View style={{justifyContent:'space-between'}}>

                    
                        <View style={{marginLeft:20, marginRight:20}}>
                            <View style={{marginTop: 60, marginBottom:40}}>
                                <TouchableOpacity style={{width:40}} onPress={() => navigation.goBack()}>
                                    <Image source={back}/> 
                                </TouchableOpacity> 
                            </View>
                        
                            <Text style={styles.label}>Remédio</Text>
                            <View style={styles.input_container}>
                                <TextInput
                                    style={{width:"100%", color:"#fff"}}
                                    placeholder='Ex: Dipirona'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    value={medicine}
                                    onChangeText={(text) => setMedicine(text)}
                                />
                            </View>

                            <View style={{flexDirection:'row', maxWidth:'100%'}}>


                                <View style={{flex:1}}>
                                    <Text style={styles.label}>Data de Início</Text>
                                    <TouchableOpacity onPress={showDatepicker1} >
                                        <View style={styles.input_container_date}>
                                            <Image source={calendario} style={{marginLeft:8, marginRight:12}} /> 
                                            <Text style={{color:'white'}}>{startDate.toLocaleDateString()}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {showInicio && (
                                        <DateTimePicker
                                        testID='dateTimePicker1'
                                        value={startDate}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange1} 
                                        />
                                    )}
                                </View>

                                <View style={{marginLeft:'5%', flex:1}}>
                                    <Text style={styles.label}>Data de Termino</Text>
                                    <TouchableOpacity onPress={showDatepicker2} >
                                        <View style={styles.input_container_date}>
                                            <Image source={calendario} style={{marginLeft:8, marginRight:12}} /> 
                                            <Text style={{color:'white'}}>{endDate.toLocaleDateString()}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {showTermino && (
                                        <DateTimePicker
                                        testID='dateTimePicker2'
                                        value={endDate}
                                        mode={'date'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange2} 

                                        />
                                    )}
                                </View>
                            </View>

                            <Text style={styles.label}>Horário</Text>
                            <View style={styles.input_container}>
                                <TouchableOpacity onPress={showDatepicker3} style={{width:"100%"}}>
                                        <View style={styles.input_container_horario}>
                                            <Image source={Alarm} style={{marginRight:12}} />
                                            <Text style={{color:'white'}}>{`${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`}</Text>
                                        </View>
                                </TouchableOpacity>
                                {showHorario && (
                                        <DateTimePicker
                                        testID='dateTimePicker3'
                                        value={time}
                                        mode={'time'}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange3} 
                                        />
                                    )}
                            </View>

                            <Text style={styles.label}>Frequência:</Text>
                            <View style={styles.label2}>
                                
                                <Picker 
                                style={styles.picker} 
                                selectedValue={frequency} 
                                onValueChange={(itemValue, itemIndex) => setFrequency(itemValue)}
                                
                                >
                                    <Picker.Item label="A cada 4 horas" value="a cada 4 horas" />
                                    <Picker.Item label="A cada 6 horas" value="a cada 6 horas" />
                                    <Picker.Item label="A cada 8 horas" value="a cada 8 horas" />
                                    <Picker.Item label="A cada 12 horas" value="a cada 12 horas" />
                                </Picker>
                            </View>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.buttonTouch} onPress={handleReminder}>
                                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                    <Text style={styles.buttonEnter}>Confirmar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        width:'100%',
        height:'100%',
    },

    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom:10,
    },

    label2:{
        fontSize: 16,
        marginBottom:80,
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
    },

    picker:{
        color: '#fff',
        fontSize: 16,
    },

    input_container:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        color:'#fff',
        marginBottom:7,
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:10,
        maxWidth:'100%',
        marginBottom:25,
    },



    input_container_date:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        color:'#fff',
        marginBottom:7,
        flexDirection:'row',
        marginBottom:25,
    },

    input_container_horario:{
        height: 50,
        alignItems:"center",
        color:'#fff',
        flexDirection:'row',
        width:"100%",
    },

    buttonTouch:{
        marginTop:25,
        height: 50, 
        width:"100%", 
        marginBottom:15
    },

    button:{
        height: 50,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:"center",
        marginLeft:20,
        marginRight:20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonEnter:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
    },

    
})