import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";
export const SobreScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Olá pagina sobre</Text>
   <Button title = "volte"
   onPress={() => navigation.navigate("Home")}/>
      </View>
    );
  };