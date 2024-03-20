import React from 'react';
import {  ImageBackground, Text, View } from 'react-native';
import { styles } from './style';
import Notificacao from '../../components/Notificacao';


export default function Notificacoes() {

  let EPI = {
    Nome: 'Protetor Uricular',
    Validade: '04/03/2024'
  }


  return (
    <ImageBackground source={require('../../imgs/BG.png')} resizeMode='cover' style={{flex: 1, width: '100%'}}>

      <View style={styles.container}>

        <Text style={{ fontSize: 25, color: 'white' }}>Avisos</Text>

        <View style={{ width: '100%', padding: 20}}>

          <Text style={{ fontSize: 20, color: 'white', marginBottom: 25 }}>EPIs Veinculados a Você</Text>

          <Notificacao Tipo='added' Texto={`Nome : ${EPI.Nome}`} SubTexto={`Validade : ${EPI.Validade}`} />
          <Notificacao Tipo='warning' Texto={`Nome : ${EPI.Nome}`} SubTexto={`Validade : ${EPI.Validade}`} />

        </View>

        <View style={{ width: '100%', padding: 20}}>

          <Text style={{ fontSize: 20, color: 'white', marginBottom: 25 }}>Notificações</Text>

          <Notificacao Tipo='added' Texto={`${EPI.Nome} veinculado a você`} />
          <Notificacao Tipo='warning' Texto={`${EPI.Nome} prester a vencer`} />

        </View>

      </View>

    </ImageBackground>
   
  );
}
