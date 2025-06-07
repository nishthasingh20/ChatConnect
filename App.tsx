import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Bitter-Regular': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8fbfOLjOWA.ttf',
    'Bitter-Medium': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8XbYOLjOWA.ttf',
    'Bitter-SemiBold': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8SjYOLjOWA.ttf',
    'Bitter-Bold': 'https://fonts.gstatic.com/s/bitter/v32/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8RHYOLjOWA.ttf',
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
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
