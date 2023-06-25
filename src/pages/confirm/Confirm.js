import React from 'react';
import { Stack, useRouter, Link } from 'expo-router'
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import back from "../../../assets/back.png"
import confirm from "../../../assets/confirm.png"

export default function Confirm({ navigation }){

    return (
        
        <SafeAreaView> 
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>

                        <View style={styles.confirmimg}>
                            <Image source={confirm} />
                        </View>

                        <View style={{alignItems:'center'}}>
                            <Text style={styles.header_text}>Tudo certo!</Text>
                            <Text style={styles.midle_text1}>Sua conta foi criada com sucesso.</Text>
                            <Text style={styles.midle_text2}>Você já pode usar nosso aplicativo.</Text>
                        </View>

                        <TouchableOpacity style={{marginTop:65, marginBottom: 65}} onPress={() => {
                            navigation.navigate('HomeRoute')
                        }}>
                            <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                    <Text style={styles.buttonEnter}>Continuar</Text>
                            </LinearGradient>
                        </TouchableOpacity>

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
        flexDirection: 'column',
        justifyContent: 'center',
    },

    confirmimg:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:75,
    },

    header_text:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 800,
        marginTop: 30
    },

    midle_text1:{
        textAlign:'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 800,
        paddingLeft:8,
        paddingRight:8,
        marginTop:20,
    },


    midle_text2:{
        textAlign:'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 600,
        paddingLeft:8,
        paddingRight:8,
        marginTop:20,
    },

    button:{
        height: 50,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:"center",
        width:"100%",
        
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