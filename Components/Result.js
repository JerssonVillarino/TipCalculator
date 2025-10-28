import {StyleSheet, Text, View } from "react-native";

export default function Result(props) {

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.Text}>{props.title}</Text>
        <Text style={styles.Text}>{props.value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  Text:{
    fontSize: 18,
    fontWeight: "bold",
  },
});