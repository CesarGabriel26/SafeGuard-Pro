import React from 'react';
import {  Text, View } from 'react-native';
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function Notificacao({ Tipo = 'added', Texto, SubTexto }) {
  return (
    <View style={styles.notification} >
        <Ionicons style={styles.notificationIcon} name={Tipo == 'added'? 'checkmark-circle' : 'warning'} size={24} color={Tipo == 'added'? '#00A310' : '#CC0000'} />
        <View style={styles.notificationBody}>
            <Text style={styles.notificationText} >
                {Texto}
            </Text>
                {SubTexto?  (
                    <Text style={styles.notificationSubText} >
                        {SubTexto}
                    </Text>
                ) : undefined
            }
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    notification : {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5
    },
    notificationBody : {
        flex: 1,
    },
    notificationText: {
        fontSize: 15
    },
    notificationSubText: {
        marginTop: 5,
        fontSize: 12
    },
    notificationIcon: {
        marginRight: 10
    }

});
  