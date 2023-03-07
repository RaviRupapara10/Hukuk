import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "@rneui/base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Sender = (props: any) => {
  // console.log(props);
const massges:any =props.data
  return (
    <>
      <View style={styles.containerStyle}>
        <Avatar
          size={40}
          rounded
          source={require("../../../Images/chat/girlavatar.png")}
        />
        <View style={styles.textContainer}>
          <Text style={{color:'#ffffff '}}>
           {massges.chat}
          </Text>
        </View>
      </View>

      <View style={{ paddingHorizontal: 50 }}>
        <Text style={{ margin: 5, color: "#797F8A" }}>{massges.time}</Text>
      </View>
    </>
  );
};

export default Sender;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
elevation:5,
  },

  textContainer: {
    maxWidth: windowWidth / 1.7,
    backgroundColor: "#0971FE",
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
    borderTopEndRadius: 16,
    marginHorizontal: 15,
    padding: 10,
  },
});
