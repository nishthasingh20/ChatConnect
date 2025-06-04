import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </>
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
