import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import estilos from "./src/stylesheets/estilo"; /* CSS */

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
          <Text style={estilos.titulo}>Topo/Cabeçalho...</Text>
        </View>

        {/* Conteúdo... ... */}
        <View style={estilos.conteudo}>
          <Text style={estilos.subtitulo}>Conteúdo... </Text>
          <Text style={estilos.texto}>
            Etiam sed condimentum lorem. Integer sit amet risus dignissim diam
            tristique suscipit. Cras at erat sed diam maximus dapibus.
          </Text>
          <Text style={estilos.texto}>
            Curabitur scelerisque ipsum non tristique eleifend. Vestibulum
            tempor leo ut eros rutrum finibus. Praesent ultrices commodo eros,
            porttitor pellentesque turpis maximus fermentum. Integer a risus et
            orci vulputate mattis. Pellentesque nec sem cursus, mattis risus
            non, hendrerit ex.
          </Text>
          <Text style={estilos.texto}>
            Praesent in dapibus diam, nec consectetur nisl. Fusce hendrerit nunc
            congue, vulputate lacus nec, suscipit lectus. Vestibulum venenatis
            varius condimentum. Praesent scelerisque ex iaculis justo sodales
            rhoncus. Curabitur at efficitur ligula, pharetra commodo nibh. Sed
            eget dignissim ex, sed accumsan turpis.
          </Text>
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
