import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Message } from "./ChatMassage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Sender = (props: any) => {
  // console.log(props);
  const message: Message = props.data;
  // console.log("-----",message);
  
  return (
    <View style={{ alignSelf: "flex-end" }}>
      <View style={styles.containerStyle}>
        <View style={styles.textContainer}>
          <Text> {message.chat}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 50, alignSelf: "flex-end" }}>
        <Text style={{ margin: 5, color: "#797F8A" }}>{message.time.toTimeString()}</Text>
      </View>
    </View>
  );
};

export default Sender;

const styles = StyleSheet.create({
  containerStyle: {
    alignSelf: "flex-end",
    elevation: 5,
  },
  textContainer: {
    maxWidth: windowWidth / 1.7,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 10,
  },
});
