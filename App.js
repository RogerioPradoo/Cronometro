import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [numero, setNumero] = useState(0);
  const [button, setButton] = useState('Iniciar');
  const [last, setLast] = useState(null);


  function iniciar() {

    if (timer !== null) {

      clearInterval(timer);
      timer = null;
      setButton('Iniciar');
    } else {

      timer = setInterval(() => {

        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? '0' + hh : hh) + ':'
          + (mm < 10 ? '0' + mm : mm) + ':'
          + (ss < 10 ? '0' + ss : ss);

        setNumero(format);

      }, 1000);

      setButton('Pausar');
    }
  }

  function resetar() {

    if (timer !== null) {

      clearInterval(timer);
      timer = null;

    }

    setLast(numero);
    setNumero(0);

    ss = 0;
    mm = 0;
    hh = 0;

    setButton('Iniciar');

  }


  return (
    <View style={styles.container}>

      <Image
        source={require('./crono.png')}
      />

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={iniciar}>

          <Text style={styles.btnText}>{button}</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={resetar}>

          <Text style={styles.btnText}>Limpar</Text>

        </TouchableOpacity>


      </View>

      <View style={styles.lastArea}>

        <Text style={styles.textCorrida}>
          {last ? 'Ultimo tempo: ' + last : ''}
        </Text>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 25
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#00aeef"
  },
  lastArea: {
    marginTop: 40
  },
  textCorrida: {
    fontSize: 23,
    color: "#FFF",
    fontStyle: 'italic'
  }
});
