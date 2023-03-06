import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Reciver = () => {
  return (
    <View style={{ alignSelf: "flex-end" }}>
      <View style={styles.containerStyle}>
        <View style={styles.textContainer}>
          <Text>hi</Text>
        </View>
      </View>
      <View style={styles.TimeText}>
        <View style={{ height: 40, width: 40, paddingRight: 40 }}></View>
        <Text style={{ margin: 5, color: "#797F8A" }}>4:12 PM</Text>
      </View>
    </View>
  );
};

export default Reciver;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  textContainer: {
    height: "100%",
    maxWidth: windowWidth / 1.7,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
    // borderTopEndRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  TimeText: {
    height: 40,
    flexDirection: "row",
  },
});
