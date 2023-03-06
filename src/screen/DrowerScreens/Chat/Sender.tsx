import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "@rneui/base";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


const Sender = () => {
  return (
    <>
      <View style={styles.containerStyle}>
        <Avatar
          size={40}
          rounded
          source={require("../../../Images/chat/girlavatar.png")}
        />
        <View style={styles.textContainer}>
          <Text>Merhaba dnakndklandlkandlkandl nndalkndl  anlkdnasldn          
            addsd
          </Text>
        </View>
      </View>
      <View style={styles.TimeText}> 
      <View style={{height:40,width:40,paddingHorizontal:30}}></View>
      <Text style={{margin:5,color:'#797F8A'}}>4:12 PM</Text>
      </View>
    </>
  );
};

export default Sender;

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
    backgroundColor: "#0971FE",
    borderBottomLeftRadius: 16,
    borderBottomEndRadius: 16,
    borderTopEndRadius: 16,
    // alignItems: "center",
    // justifyContent: "center",
    marginHorizontal: 15,
    padding:10,
  },
  TimeText: {
    height:40,
    flexDirection:'row'
  },
});
