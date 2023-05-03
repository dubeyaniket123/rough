import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './src/component/screen/BottomNavigator';
import Task from './src/component/screen/Task';
import HeaderButton from './src/component/screen/HeaderButton';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen
          name="BottomNavigator"
          component={BottomNavigator}
          options={{
              headerTitle: 'My Space',
              headerStyle: {backgroundColor: '#fff'},
              headerTintColor: 'black',
              headerTitleStyle: {
                fontSize: 18,
              },
              headerRight: () => (
                <HeaderButton icon="notifications" />
                
              ),
            }}          
        />
       <Stack.Screen
          name="Task"
          component={Task}
          options={{ headerShown: false }}
        />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}
