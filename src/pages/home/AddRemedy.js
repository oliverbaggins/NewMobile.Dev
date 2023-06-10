import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'
import { Stack, useRouter } from 'expo-router'

import logoperfil from "../../../assets/logoperfil.png"
import relogio from "../../../assets/relogiocortado.png"
import menu from "../../../assets/menu.png"
import ScheduleList from './components/schedulelist'
import Dias from './components/dia'

export default function AddRemedy({navigation}){

    return (
        <SafeAreaView>
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>

                        <View style={styles.containerHeader}>

                            <View style={{flexDirection:"row", marginLeft:20, marginTop:20}}>
                                <View style={{justifyContent:"center"}}>
                                    <Image source={logoperfil}/> 
                                </View>

                                <View style={{justifyContent:"center", marginLeft:8}}>
                                    <Text style={styles.textPerfil}>Olá, Carlos!</Text>
                                </View>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.menu} onPress={() => {
                                    navigation.openDrawer()
                                }}>
                                    <Image source={menu}/>
                                    <Text style={{color:"#fff", marginLeft:3}}>Menu</Text>
                                </TouchableOpacity> 
                            </View>

                        </View>
                                    
                        <View style={{marginRight:20, marginLeft:20}}>
                           <TouchableOpacity style={styles.addremedy} onPress={() => {
                                navigation.navigate('CriarLembrete')
                            }}>
                                <View>
                                    <Text style={{color:"#fff", fontSize:20, fontWeight:700}}>Clique aqui</Text>
                                    <Text style={{color:"#fff", fontSize:16, fontWeight:700, marginTop:16}}>Para agendar{'\n'}novos horários</Text>
                                </View>
                                <Image source={relogio}/> 
                            </TouchableOpacity> 
                        </View>            
                        
                        
                                    
                                    
                        <View>
                                    
                            <View>
                                <Text style={{marginLeft:20 ,fontWeight: 700, fontSize: 23, color:"#fff", marginTop:40, marginBottom:25}}>Seus horários</Text>
                                
                            </View>
                            {/* <View style={{marginBottom:25}}>
                                <Dias />
                            </View> */}
                            
                            <View style={{height:"65%"}}>  
                                <ScheduleList/>
                            </View>
                        
                        </View>
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

    containerHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },

    textPerfil:{
        color:"#fff",
        fontWeight: 700,
        fontSize: 17
    },

    menu:{
        height:40, 
        backgroundColor:"rgba(36, 121, 175, 1)",
        flexDirection:"row",
        alignItems:"center",
        paddingRight:16,
        paddingLeft:16,
        borderRadius:8,
        marginRight:20,
        marginTop:20
    },

    addremedy:{
        width:"100%",
        backgroundColor:"rgba(36, 121, 175, 1)",
        flexDirection:"row",
        borderRadius:8,
        marginTop:35,
        paddingTop:28,
        justifyContent:"space-around",
        paddingLeft:24,
        paddingRight:24,
    },

    
})