import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'
import Lua from './assets/lua.png'

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.img} source={Lua} />
      <View style={estilos.boxTexto}>
        <Text style={estilos.titulo}>Lua</Text>

        <Text style={estilos.texto}>
          A Lua é o satélite natural do{' '}
          <Text style={estilos.destaque}>planeta Terra</Text>, distanciados por
          aproximadamente 384.405 km.
        </Text>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 200,
    height: 200,
    marginBottom: 10
  },

  boxTexto: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25
  },

  titulo: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },

  texto: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  },
  destaque: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#fff'
  }
})
