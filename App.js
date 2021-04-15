
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tela36 from './src/screens/Tela36/Index';
import Tela38 from './src/screens/Tela38/Index';
import Tela40 from './src/screens/Tela40/Index';
import Tela44 from './src/screens/Tela44/Index';
import TelaAbertura from './src/screens/TelaAbertura/Index';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName={'Dashboard'}
        tabBarOptions={{ 
          activeTintColor: 'white', 
          inactiveTintColor: 'gray', 
          style:{ backgroundColor: '#a819a8',
                  height: 70,
                  paddingBottom: 15, 
                },
              }}
          screenOptions ={({route})  => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Dashboard') {
                iconName = 'view-dashboard-outline';
              } else if (route.name === 'Grupos') {
                iconName = 'account-group-outline';
              } else if (route.name === 'Disciplinas') {
                iconName = 'book-open-variant';
              } else if (route.name === 'Skills') {
                iconName = 'puzzle-outline';
              } else if (route.name === 'Perfil') {
                iconName = 'account-outline';
              }
              
              return <MaterialCommunityIcon name={iconName} size={30} color={color} />;
            },})}
      >

        <Tab.Screen name="Dashboard" component={TelaAbertura}/>
        
        <Tab.Screen name="Grupos" component={Tela36}/>

        <Tab.Screen name="Disciplinas" component={Tela38}/>

        <Tab.Screen name="Skills" component={Tela40}/>

        <Tab.Screen name="Perfil" component={Tela44}/>
        
      </Tab.Navigator>
    </NavigationContainer>  

  );

};

// Telas pag 36, 38, 48, 55
