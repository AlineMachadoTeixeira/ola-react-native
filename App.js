import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça");
    console.log("Teste!");
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        {/* Topo/Cabeçalho... */}
        <View style={estilos.cabecalho}>
          <Text>Topo/Cabeçalho...</Text>
        </View>

        {/* Conteúdo... ... */}
        <View style={estilos.conteudo}>
          <Text>Conteúdo... </Text>
        </View>

        {/* Rodapé... */}
        <View style={estilos.rodape}>
          <Text>Rodapé...</Text>
          {/* onPress={} tipo onClick  */}
          <Button title="Toca aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#cee7fe",
    flex: 1,
    /* justifyContent: "center",
    flexDirection: "row" // padrão é coluna*/
  },

  cabecalho: {
    backgroundColor: "#a8bccf",
    flex: 1,
  },

  conteudo: {
    backgroundColor: "#8493a2",
    flex: 4,
  },

  rodape: {
    backgroundColor: "#626c76",
    flex: 0.7,
  },
});
