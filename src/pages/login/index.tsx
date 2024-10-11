import React from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";  // O 'Image' já foi importado aqui
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image 
            source={Logo}
            style={style.logo}
            resizeMode="contain"
        />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      
      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.BoxInput}>
            <TextInput 
                style={style.input}
            /> 
            <MaterialIcons
                name='email'
                size={20}
                color={themas.colors.gray}
            />
        </View>

        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.BoxInput}>
            <TextInput 
                style={style.input}
            /> 
            <MaterialIcons
                name='remove-red-eye'
                size={20}
                color={themas.colors.gray}
            />
        </View>
       </View>
    <View style={style.boxBottom}>
        <TouchableOpacity style={style.button}>
            <Text style={style.textButton}>ENTRAR</Text>
        </TouchableOpacity>
    </View>
       <Text style={style.textBottom}>Não tem conta?<Text style={style.textBottomCreate}>Crie Agora!</Text> </Text>
    </View>
  );
}
