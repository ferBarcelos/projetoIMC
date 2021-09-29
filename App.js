import React, { Component } from 'react';
import { Plataform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { nome: "", altura: 0, peso: 0, resultado: 0, resultatoText: "" };
    this.calcular = this.calcular.bind(this);
  }


  calcular() {

    let imc = this.state.peso / (this.state.altura * this.state.altura);

    let valResultado = this.state;
    valResultado.resultado = imc;
    this.setState(valResultado);

    if (valResultado.resultado < 16) {
      valResultado.resultatoText = " sugiro que procure um médico! "
    } else if (valResultado.resultado < 17) {
      valResultado.resultatoText = " está com Magreza Moderada! "
    } else if (valResultado.resultado < 18.5) {
      valResultado.resultatoText = " está com Magreza Leve! "
    } else if (valResultado.resultado < 25) {
      valResultado.resultatoText = " está Saudável ! "
    } else if (valResultado.resultado < 30) {
      valResultado.resultatoText = " está com SobrePeso! "
    } else if (valResultado.resultado < 35) {
      valResultado.resultatoText = " está com Obesidade Grau I ! "
    } else if (valResultado.resultado < 40) {
      valResultado.resultatoText = " está com Obesidade Grau II ! "
    } else {
      valResultado.resultatoText = " está com Obesidade Grau III ! "
    }

  }

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.box}>
          <Text style={styles.title}>Calculadora de IMC</Text>
        </View>

        <View style={styles.principal}>
          <TextInput style={styles.form} placeholder='Nome' textContentType='name' onChangeText={(nome) => { this.setState({ nome }) }} />
          <TextInput style={styles.form} placeholder='Peso' keyboardType='numeric' onChangeText={(peso) => { this.setState({ peso }) }} />
          <TextInput style={styles.form} placeholder='Altura' keyboardType='numeric' onChangeText={(altura) => { this.setState({ altura }) }} />
          
          <TouchableOpacity style={styles.botton}>
            <Text style={styles.bottonText} onPress={this.calcular}>Calcula IMC</Text>
          </TouchableOpacity>
          <Text style={styles.valorResultado}>{this.state.resultado.toFixed(2)}</Text>
        </View>

        <Text style={styles.textResultado}>{this.state.nome}{this.state.resultatoText}</Text>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>FernandoBarcelos</Text>
        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#7952B3',
    justifyContent: 'center',
  },

  tContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 20,
  },
  footerText: {
    color: '#fff'
  },
  title: {
    color: '#FFF',
    fontSize: 30,
  },
  box: {
    position: 'absolute',
    bottom: 696,
    backgroundColor: '#000',
    opacity: 0.9,
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  principal: {
    width: 395,
    height: 370,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    padding: 20,
    marginBottom: 150,
  },

  form: {
    height: 40,
    width: 320,
    padding: 10,
    fontSize: 20,
    color: '#333',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    borderColor: '#fff',
    borderBottomWidth: 1,
    marginTop: 20,
  },

  botton: {
    width: 320,
    padding: 20,
    fontSize: 25,
    backgroundColor: 'rgb(250,250,250)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  bottonText: {
    fontSize: 20,
  },

  valorResultado: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    marginTop: 1,
    padding: 17,
  },

  textResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -90,
    color: '#fff',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    padding: 1,
    alignSelf: 'center',
  }

});