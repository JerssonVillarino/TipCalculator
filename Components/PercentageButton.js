import { StyleSheet } from "react-native";
import TextButton from "./TextButton";

export default function PercentageButton(props) {

  return (
    <TextButton
      title={props.percentage + "%"} 
      buttonStyle={{
        backgroundColor: '#14dd3ce3',
        borderColor:'#14dd3ce3',
      }}
      onTab={() => props.onTab()}

      />
  );
}