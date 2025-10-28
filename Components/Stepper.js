import {Pressable, StyleSheet, Text, View } from "react-native";
import TextButton from "./TextButton";

export default function Stepper(props) {
const defaultMinValue = 1;
const defaultMaxValue = 100;
const defaultUpAndDown = 1;

const minValue = props.minValue === null || props.minValue === undefined 
 ? defaultMinValue
 : Number(props.minValue);

const maxValue = props.maxValue === null || props.maxValue === undefined 
 ? defaultMaxValue
 : Number(props.maxValue);

 const upAndDown = props.upAndDown === null || props.upAndDown === undefined 
 ? defaultUpAndDown
 : Number(props.upAndDown);

let value = props.value === null || props.value === undefined 
 ? defaultMinValue
 : Number(props.value);

function OnIncrementButtonTabbed(){
if(value + upAndDown > maxValue){
  return;
}
  value+=upAndDown;
  props.onChage(value.toFixed(2));
}

function OnDecrementButtonTabbed(){
if(value - upAndDown< minValue){
return;
}
  value-=upAndDown;
  props.onChage(value.toFixed(2));
}

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <Pressable onPress={OnDecrementButtonTabbed}>
                <Text style={styles.Text}>-</Text>
            </Pressable>
        </View>
        <View style={styles.buttonContainer}>
            <Pressable onPress={OnIncrementButtonTabbed}>
                <Text style={styles.Text}>+</Text>
            </Pressable>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
    gap: 2,
  },
  buttonContainer: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor:'gray',
   // alignItems: 'center',
  },
  Text:{
    fontSize: 30,
  },

  
});