import { Button, Text, View } from "react-native";
import { styles } from "../lib/styles";

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text><h1>daora daorinha daorona daorenha darora dahora da hora horada dadaho hodada hodara horada daraho rahoda</h1></Text>
    <Button title="Ir para Sobre"
    onPress={() => navigation.navigate("Sobre")}/>
    </View>
  );
};
