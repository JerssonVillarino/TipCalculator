import { Pressable,StyleSheet, Text, View } from "react-native";

export default function TextButton(props) {

  function onTabHandler(){
    props.onTab()
  }
  return (
    <View>
      {/* <Pressable onPress={onTabHandler}> */}
      <Pressable onPress={props.onTab}>
        <View 
        style={[
          styles.buttonContainer, 
          props.buttonStyle
          ]}> 
          <Text 
          style={[
            styles.textstyles, 
            props.textStyles
            ]}
            >
              {props.title}
            </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#ccc',
    padding: 8,
    paddingHorizontal: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    
  },
  textstyles: {
    color: 'black',
    fontSize: 16,
  }
});