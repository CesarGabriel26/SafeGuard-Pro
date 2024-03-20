import React from 'react';
import {  Image, ImageBackground, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

import Notificacao from '../../components/Notificacao';

export default function EPIs() {
  return (
    <ImageBackground source={require('../../imgs/BG.png')} resizeMode='cover' style={{flex: 1, width: '100%'}}>

      <View style={styles.container}>

        <Text style={{ fontSize: 25, color: 'white' }}>EPIs</Text>
        

        <View style={{ width: '100%', padding: 20}}>
          <Notificacao Tipo='warning' Texto={` prester a vencer`} />
        </View>

        <View style={{ width: '100%', padding: 20}}>

          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }} >

            <View style={styles.EpisDescriptionTexts}>
              <Text>Colaborador</Text>
              <Text>Nome Colaborador</Text>
            </View>

            <View style={styles.EpisDescriptionTexts}>
              <Text>EPI</Text>
              <Text>Nome EPI</Text>
            </View>

            <View style={styles.EpisDescriptionTexts}>
              <Text>Vinculado</Text>
              <Text>DD/MM/YYY</Text>
            </View>

            <View style={styles.EpisDescriptionTexts}>
              <Text>Vencimento</Text>
              <Text>DD/MM/YYY</Text>
            </View>

            <View style={styles.EpisDescriptionTexts}>
              <Text>Descrição</Text>
              <Ionicons name='chevron-down-outline' size={24} color='black' />
            </View>

          </View>

          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginTop: 20 }} >
            <Text style={{fontSize: 15}} >Descrição do EPI LoremLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam. </Text>
          </View>
          
        </View>

        <View style={{ width: '100%', padding: 20, minHeight: 200}}>
          <Image style={{ width: '100%', height: "100%"}} source={require("../../imgs/placeholder.webp")} />
        </View>

      </View>

    </ImageBackground>
  );
}
