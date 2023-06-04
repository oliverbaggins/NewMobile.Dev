import React, { useState } from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import authService from '../../services/auth.service';

import back from "../../../assets/back.png"

export default function InsertEmail({navigation}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await authService.signup(email, password).then(
                (response) => {
                    console.log("Sign up successfully", response)
                    navigation.navigate('HomeRoute')
                },
                (error) => {
                    console.log(error)
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (

        <SafeAreaView>
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}> 
            
                        <View style={{marginTop: 20}}>
                            <TouchableOpacity style={{width:40}} onPress={() => navigation.goBack()}>
                                <Image source={back}/> 
                            </TouchableOpacity> 
                        </View>
            
                        <View style={{marginTop: 40, marginBottom:40}}>
                            <Text style={styles.header_text}>Crie sua conta{'\n'}</Text>
                        </View>
            
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.input_container}>
                            <TextInput
                            style={styles.input}
                            placeholder='Insira seu email aqui...'
                            placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            />
                        </View>

                        <Text style={styles.label}>Senha</Text>
                        <View style={styles.input_container}>
                            <TextInput
                            style={styles.input2}
                            placeholder='Insira sua senha aqui...'
                            placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            />
                        </View>
                        
                        
                        <View style={styles.containerp1}>
                            {/* <Text style={{color:'#fff'}}>Ao se registrar você está aceitando nossos</Text>

                            <View style={{ flexDirection:'row'}}>
                                <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'#fff'}}>
                                    <Text style={{color:'#fff'}}>Termos de Uso</Text>
                                </TouchableOpacity>
                                <Text style={{color:'#fff'}}> e </Text>
                                <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'#fff'}}>
                                    <Text style={{color:'#fff'}}>Politicas de Privacidade</Text>
                                </TouchableOpacity>
                                <Text style={{color:'#fff'}}>.</Text>
                            </View> */}
                            
                            <TouchableOpacity style={styles.buttonTouch} onPress={() => {
                                navigation.navigate('HomeRoute')
                            }}>
                                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                    <Text style={styles.buttonEnter}>Continuar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
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
        padding:20,
    },

    header_text:{
        color: '#fff',
        fontWeight: 800,
    },

    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom:10,
    },

    input_container:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        marginBottom:16,
        color:'#fff',
   
    },

    input:{
        color: '#fff',
        width:"90%",
        height:"100%",  
    },

    input2: {
        color: '#fff',
        width:"90%",
        height:"100%",
        marginBottom:150
    },

    containerp1:{
        alignItems:'center',
        position:'absolute',
        bottom:0,
        width:'100%',
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