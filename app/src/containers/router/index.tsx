import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserScreens from '../user';
import { UserStackProps } from './types';

const Stack = createNativeStackNavigator<UserStackProps>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={{
          statusBarColor: '#2d77ed',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#2d77ed' },
        }}>
        <Stack.Screen
          name="UserList"
          component={UserScreens.UserList}
          options={{ title: 'Listado de usuarios' }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserScreens.UserDetail}
          options={{
            title: 'Detalle de usuario',
            headerBackButtonMenuEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
