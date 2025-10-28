import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TextButton from "./Components/TextButton";
import PercentageButton from "./Components/PercentageButton"; 
import LabelTextInput from "./Components/LabelTextInput";
import Result from "./Components/Result";
import Stepper from "./Components/Stepper";


export default function App() {
  const [importeDelConsumo, setImporteDelConsumo] = useState('');
  const [numeroDePersonas, setNumeroDePersonas] = useState(1);
  const [porcentajeDePropina, setPorcentajeDePropina] = useState(10);

  const [ConsumoPorPersona, setConsumoPorPersona] = useState('');
  const [ImportePropina, setImportePropina] = useState('');
  const [PropinaPorPersona, setPropinaPorPersona] = useState('');
  const [ImporteTotal, setImporteTotal] = useState('');
  const [ImporteTotalPorPersona, setImporteTotalPorPersona] = useState('');
  

  function calcularButtonHandler() {

    const consumo = Number(importeDelConsumo);
    const numpersonas = parseFloat(numeroDePersonas);
    const propina = parseFloat(porcentajeDePropina);

    const consumoPorPersona = consumo / numpersonas;
    const importePropina = consumo * (propina / 100);
    const propinaPorPersona = importePropina / numpersonas;
    const importeTotal = consumo + importePropina;
    const importeTotalPorPersona = importeTotal / numpersonas;

    setConsumoPorPersona(consumoPorPersona.toFixed(2));
    setImportePropina(importePropina.toFixed(2));
    setPropinaPorPersona(propinaPorPersona.toFixed(2));
    setImporteTotal(importeTotal.toFixed(2));
    setImporteTotalPorPersona(importeTotalPorPersona.toFixed(2));



  }

    function limpiarButtonHandler() {
    setImporteDelConsumo('');
    setNumeroDePersonas(1);
    setPorcentajeDePropina(10);
    setConsumoPorPersona('');
    setImportePropina('');
    setPropinaPorPersona('');
    setImporteTotal('');
    setImporteTotalPorPersona('');
  }


   
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.horizontalContainer}>
          <LabelTextInput label='Importe del consumo' keyboardType="numeric" 
          onInputChamge={(enteredText) => setImporteDelConsumo(enteredText)}
          value={importeDelConsumo.toString()}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <LabelTextInput label='Número de personas' onInputChamge={
            (enteredText) => setNumeroDePersonas(enteredText)
          }
          value={numeroDePersonas}
          keyboardType="numeric"
          />
        
          <Stepper
          minValue="1"
          maxValue="100"
          upAndDown="1"
          value={numeroDePersonas}
          onChage={(newValue) => setNumeroDePersonas(newValue)}

          />

        </View>
        <View style={styles.horizontalContainer}>
          <PercentageButton percentage='8'  onTab={() => setPorcentajeDePropina('8')}/>
          <PercentageButton percentage='10' onTab={() => setPorcentajeDePropina('10')}/>
          <PercentageButton percentage='12.5' onTab={() => setPorcentajeDePropina('12.5')}/>
          <PercentageButton percentage='15' onTab={() => setPorcentajeDePropina('15')}/>
        </View>
        <View style={styles.horizontalContainer}>
          <LabelTextInput label='Porcentaje de propina' 
          value={porcentajeDePropina}
          keyboardType="numeric"
          onInputChamge={(enteredText) => setPorcentajeDePropina(enteredText)}
          />
          <Stepper
          minValue="5"
          maxValue="25"
          upAndDown="0.25"
          value={porcentajeDePropina}
          onChage={(newValue) => setPorcentajeDePropina(newValue)}
          />
        </View>
        
      </View>

      <View style={styles.commandContainer}>
        <TextButton title="Calcular" 
        buttonStyle={{
          backgroundColor: 'blue',
          color: 'white',
        }}
        onTab={calcularButtonHandler}
        />
        <TextButton title="Limpiar"
            buttonStyle={{
            backgroundColor: 'blue',
            color: 'white',
          }}
          onTab={limpiarButtonHandler}
          
        />
      </View>

      <View style={styles.resultsContainer}>
        <Result 
        title="Consumo por persona: "
        value= {ConsumoPorPersona}
        />
        <Result 
        title="Importe propina: "
        value={ImportePropina}
        />
        <Result 
        title="Propina por persona: "
        value={PropinaPorPersona}
        />
        <Result 
        title="Importe total: "
        value={ImporteTotal}
        />
        <Result 
        title="Importe total por persona: "
        value={ImporteTotalPorPersona}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    padding: 24,
  },
 inputContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 16,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    gap:8,
    
   },
   commandContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
   },
  resultsContainer:{
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 16,
    
  },
  

});