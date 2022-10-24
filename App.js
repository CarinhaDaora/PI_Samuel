import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Button } from 'react-native';

export function HomeScreen({navigation}) {
  const irParaSobre = () =>{
 return navigation.navigate("Sobre");
  }
  return (
    <View style={styles.container}>
      <Text>Open your app!</Text>
      <Button title="ir para sobre" onPress={irParaSobre}/>
    </View>
  );
}
function SobreScreen() {
  return (
    <View>
      <Text>Olá pagina sobre</Text>

    </View>
  )
}
const Stack = createNativeStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={"Home"} component={HomeScreen}/>
      <Stack.Screen name={"Sobre"} component={SobreScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
