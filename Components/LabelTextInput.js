import { StyleSheet, Text, View, TextInput } from "react-native";

export default function LabelTextInput(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>
        {props.label}
      </Text>
      <TextInput 
      style={styles.textInput}
      keyboardType={props.keyboardType}
      onChangeText={(enteredText) => props.onInputChamge(enteredText)}
      value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 4,
    flex: 1,
    marginBottom:4
  },
  
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
  },
  textStyles: {
  fontSize: 12,
  marginBottom: 4,
 },
});