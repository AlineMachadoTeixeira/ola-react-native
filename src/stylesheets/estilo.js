import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#cee7fe",
    flex: 1,
    /* justifyContent: "center",
      flexDirection: "row" // padrão é coluna*/
    // fontFamily: " sans-serif",
  },

  cabecalho: {
    backgroundColor: "#add8e6",
    flex: 1,
    justifyContent: "center",
  },

  tituloCabecalho: {
    color: "#191970",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },

  conteudo: {
    backgroundColor: "#f0f8ff",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
  },

  subtituloConteudo: {
    color: "#311801",
    padding: 10,
    textAlign: "center",
  },

  rodape: {
    backgroundColor: "#b8cad4",
    flex: 0.7,
  },
  textoRodape: {
    color: "#191970",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default estilos;
