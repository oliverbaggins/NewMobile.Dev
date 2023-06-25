import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'
import { Stack, useRouter, Link } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from "@react-navigation/native"

import fotoperfil from "../../../assets/fotoperfil.png"

import authService from '../../services/auth.service';

export default function Perfil({navigation}){

    const [user, setUser] = useState({ name: '', lastname: '', email: '' });

    useEffect(() => {
      authService.loggeduser().then(
        (response) => {
          setUser(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }, []);
  
    const handleNameChange = (text) => {
      setUser((prevUser) => ({ ...prevUser, name: text }));
    };
  
    const handleLastNameChange = (text) => {
      setUser((prevUser) => ({ ...prevUser, lastname: text }));
    };
  
    const handleEmailChange = (text) => {
      setUser((prevUser) => ({ ...prevUser, email: text }));
    };

    // const [name, setName] = useState(.name)
    // const [lastname, setLastName] = useState(user.lastname)
    // const [email, setEmail] = useState(user.email)

    return (

        <SafeAreaView>
            <LinearGradient colors={['#001242', 'rgba(28, 181, 247, 0.7)']}>
                <View style={styles.container}>
                    <ScrollView> 
            
                        <View>
                        <View style={{ alignItems:'center', marginTop:60, marginBottom:24}}>
                            <Text style={{color:"#fff", fontSize:20, fontWeight:700}}>Editar perfil</Text>
                            <Image style={{margin:16}} source={fotoperfil} />
                            <TouchableOpacity style={{padding:17, backgroundColor:"#2479AF", borderRadius:8}}>
                                <Text style={{color:"#fff", fontSize:14}}>Alterar foto</Text>
                            </TouchableOpacity>
                        </View>
            
                        <View style={{marginLeft:20, marginRight:20}}>
                            <Text style={styles.label}>Nome</Text>
                            <View style={styles.input_container1}>
                                <TextInput
                                style={styles.input}
                                value={user.name}
                                onChangeText={handleNameChange}
                                />
                            </View>
                            <Text style={styles.label}>Sobrenome</Text>
                            <View style={styles.input_container1}>
                                <TextInput
                                style={styles.input}
                                value={user.lastname}
                                onChangeText={handleLastNameChange}
                                />
                            </View>
                            <Text style={styles.label}>E-mail</Text>
                            <View style={styles.input_container1}>
                                <TextInput
                                 value={user.email}
                                 onChangeText={handleEmailChange}
                                style={styles.input}
                                />
                            </View>
                            </View>
                        </View>

                            <TouchableOpacity style={{marginLeft:20, marginRight:20, height: 50,marginBottom:40,justifyContent:'center', alignItems:'center',backgroundColor:"#2479AF", borderRadius:8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 5,}}>
                                <Text style={{fontSize:14, color:"#fff"}}>Alterar sua senha</Text>
                            </TouchableOpacity>
        
                            <TouchableOpacity style={{height: 50, width:"100%"}} onPress={() => {
                                navigation.goBack()
                            }}>
                                <LinearGradient style={styles.button} colors={['#00B2FF', '#1F8EFB', '#3B6FF8']}>
                                        <Text style={styles.buttonEnter}>Salvar alterações</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        
                            <TouchableOpacity style={{marginTop:16,height: 50, width:"100%", marginBottom:35}} onPress={() => {
                                navigation.goBack()
                            }}>
                                <LinearGradient style={styles.button} colors={['#F587A2', '#9A0025']}>
                                        <Text style={styles.buttonEnter}>Cancelar</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        
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
        marginBottom:7,
    },

    input_container1:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        marginBottom:16,
    },

    input:{
        color: '#fff',
        width:"90%",
        height:"100%"
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