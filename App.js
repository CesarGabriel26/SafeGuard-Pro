import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import Notificacoes from './src/pages/Notificacoes';
import EPIs from './src/pages/EPIs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar style="auto" />
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Notificacoes':
                iconName = focused ? 'notifications' : 'notifications-outline';
                break;
              case 'EPIs':
                iconName = focused ? 'headset' : 'headset-outline';
                break;
              case 'Calendar':
                iconName = focused ? 'calendar' : 'calendar-outline';
                break;
              case 'Settings':
                iconName = focused ? 'settings' : 'settings-outline';
                break;
              default:
                return null
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: '#ff8300',
          tabBarInactiveTintColor: '#4d4d4d',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "flex"
            },
            null
          ]
        })}
      >
      <Tab.Screen name="Notificacoes" component={Notificacoes} />
      <Tab.Screen name="EPIs" component={EPIs} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

