import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import estilos from "./src/stylesheets/estilo";

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
          <Text style={estilos.tituloCabecalho}>Topo/Cabeçalho...</Text>
        </View>

        {/* Conteúdo... ... */}
        <View style={estilos.conteudo}>
          <Text style={estilos.subtituloConteudo}>Conteúdo... </Text>
        </View>

        {/* Rodapé... */}
        <View style={estilos.rodape}>
          <Text style={estilos.textoRodape}>Rodapé...</Text>
          {/* onPress={} tipo onClick  */}
          <Button title="Toca aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}
