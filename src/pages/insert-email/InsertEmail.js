import React, { useState } from 'react';
import {Text, View, StyleSheet,Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import authService from '../../services/auth.service';

import back from "../../../assets/back.png"

import olhoaberto from "../../../assets/olhosenha.png"
import olhofechado from "../../../assets/olhosenhafechado.png"



export default function InsertEmail({navigation}){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [olho, setolho] = useState(olho);
    const Botao_olho = () => {
        if (olho) {
            return <Image  source={olhofechado} />;
        } else {
            return <Image  source={olhoaberto} />;
        }
    }

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
                    <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent:'space-between'}}> 
            
                        <View>
                            <View style={{marginTop: 40, marginLeft:20}}>
                                <TouchableOpacity style={{width:40}} onPress={() => navigation.goBack()}>
                                    <Image source={back}/> 
                                </TouchableOpacity> 
                            </View>

                            <View style={{marginTop: 40, marginBottom:40, marginLeft:20}}>
                                <Text style={styles.header_text}>Crie sua conta</Text>
                            </View>

                            <View style={styles.padding}> 
                                <Text style={styles.label}>Nome</Text>
                                <View style={styles.input_container}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Insira seu nome aqui...'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    />
                                </View>
                            </View>

                            <View style={styles.padding}> 
                                <Text style={styles.label}>Sobrenome</Text>
                                <View style={styles.input_container}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Insira seu sobrenome aqui...'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    />
                                </View>
                            </View>

                            <View style={styles.padding}> 
                                <Text style={styles.label}>Email</Text>
                                <View style={styles.input_container}>
                                <TextInput
                                    style={styles.input}
                                    placeholder='Insira seu E-mail aqui...'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                    />
                                </View>
                            </View>

                            <View style={styles.padding}>
                                <Text style={styles.label}>Senha</Text>
                                <View style={styles.input_container1}>
                                    <TextInput
                                    style={styles.input}
                                    placeholder='Insira sua senha aqui...'
                                    placeholderTextColor={'rgba(255, 255, 255, 0.75)'}
                                    value={password}
                                    onChangeText={(text) => setPassword(text)}
                                    />
                                    <TouchableOpacity onPress={() => setolho(!olho)}>
                                        <Botao_olho olho_selecionado={olhoaberto} />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.rules}>
                                    <Text style={{color:'#fff'}}>Sua senha deve conter pelo menos 
                                        <Text style={{fontWeight:700}}> 6 caracteres. </Text>
                                        incluindo
                                        <Text style={{fontWeight:700}}> letras e números.</Text>
                                    </Text>
                                </View>

                            </View>
                            
                        </View>    
                        
                        
                        <View style={{alignItems:'center'}}>

                            <Text style={{color:'#fff'}}>Ao se registrar você está aceitando nossos</Text>
                            <View style={{ flexDirection:'row'}}>
                                <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'#fff'}}>
                                    <Text style={{color:'#fff'}}>Termos de Uso</Text>
                                </TouchableOpacity>
                                <Text style={{color:'#fff'}}> e </Text>
                                <TouchableOpacity style={{borderBottomWidth:1, borderBottomColor:'#fff'}}>
                                    <Text style={{color:'#fff'}}>Politicas de Privacidade</Text>
                                </TouchableOpacity>
                                <Text style={{color:'#fff'}}>.</Text>
                            </View>
                            

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
    },

    header_text:{
        color: '#fff',
        fontSize: 24,
        fontWeight: 800,
    },

    padding:{
        marginLeft:20,
        marginRight:20,
    },

    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom:5,
    },

    input_container:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        marginBottom:20,
        color:'#fff',
   
    },

    input_container1:{
        borderColor: "rgba(0, 178, 255, 0.5)",
        borderWidth: 1,
        backgroundColor: "rgba(0, 178, 255, 0.1)",
        borderRadius: 8,
        height: 50,
        alignItems:"center",
        marginBottom:6,
        color:'#fff',
        flexDirection:'row',
        paddingLeft:15,
        paddingRight:10
    },

    rules:{
        flexDirection:'row',
        maxWidth:300,
        marginBottom:60
    },

    input:{
        color: '#fff',
        width:"90%",
        height:"100%",  
    },

    buttonTouch:{
        marginTop:25,
        height: 50, 
        width:"100%", 
        marginBottom:20
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