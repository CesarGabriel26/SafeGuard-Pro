import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {  ImageBackground, Text, View } from 'react-native';
import { styles } from './style';

export default function Spalsh() {
  return (
    <ImageBackground source={require('../../imgs/BG.png')} resizeMode='center' style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Spalsh</Text>
      </View>
    </ImageBackground>
   
  );
}
