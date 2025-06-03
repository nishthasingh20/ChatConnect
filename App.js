import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView } from 'react-native';

export default function App() {
  console.log(Dimensions.get("screen"));
  
  return (
    <SafeAreaView style={styles.container}>
      <View style ={{
        backgroundColor: "lightblue",
        width: "50%",
        height: 70,
      }}>

      </View>

    </SafeAreaView>
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
