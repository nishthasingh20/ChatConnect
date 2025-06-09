import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';

import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Bitter-Regular': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8fbfOLjOWA.ttf',
    'Bitter-Medium': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8XbYOLjOWA.ttf',
    'Bitter-SemiBold': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8SjYOLjOWA.ttf',
    'Bitter-Bold': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8RHYOLjOWA.ttf',
  });

  useEffect(() => {
    const socket = new SockJS('http://192.168.1.103/gs-guide-websocket'); // replace with your Spring Boot server IP and port
    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('STOMP connected');

        stompClient.subscribe('/topic/messages', (message) => {
          console.log('Received message:', message.body);
        });

        // Example: send a message after connection
        stompClient.publish({
          destination: '/app/send',
          body: JSON.stringify({ sender: 'ReactNative', content: 'Hello from RN!' }),
        });
      },
      onStompError: (frame) => {
        console.error('STOMP Error:', frame);
      },
    });

    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
