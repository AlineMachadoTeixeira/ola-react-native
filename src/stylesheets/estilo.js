import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    flex: 1,
    /* justifyContent: "center",
      flexDirection: "row" // padrão é coluna*/
    // fontFamily: " sans-serif" f0f8ff,
  },

  /* Começo Cabecalho */
  cabecalho: {
    backgroundColor: "#81baef",
    flex: 0.6,
    justifyContent: "center",
  },

  titulo: {
    color: "#191970",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 22,
  },
  /* Fim Cabecalho */

  /* Começo Ccteudo */
  conteudo: {
    backgroundColor: "#cee7fe",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
  },

  subtitulo: {
    color: "#311801",
    textAlign: "center",
  },

  texto: {
    marginTop: 16,
    paddingLeft: 5,
    paddingBottom: 5,
  },

  /* Fim Conteudo */

  /* Começo Rodapé */
  rodape: {
    backgroundColor: "#81baef",
    flex: 0.7,
  },

  textoRodape: {
    color: "#191970",
    textAlign: "center",
    textTransform: "uppercase",
  },
  /* Fim Rodapé */
});

export default estilos;
