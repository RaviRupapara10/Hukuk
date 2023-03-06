import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";

const deviceWidth = Dimensions.get("window").width;

const SingleEvent = (prop: any) => {
  const [textSize, setTextSize] = useState<number>();

  const data =prop.Data
  // console.log(data);
  

  // useLayoutEffect(() => {
  const onLayout = (event: any) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    // console.log(width);

    setTextSize(width * 0.1);
  };

  return (
    <View style={styles.boxcontainer}>
      <View>
        <View onLayout={onLayout} style={styles.innerContainer} />
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: textSize,
              // height: "100%",
              textAlign: "center",
              alignSelf:'center',
              flexWrap:'wrap',
              padding: 5,
            }}
          >
          {data.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxcontainer: {
    // marginHorizontal: 5,
    // height: 164,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    aspectRatio: 16 / 15,
    alignItems: "center",
    margin:5,
  },
  innerContainer: {
    // height: 110,
    width: "100%",
    // width: (deviceWidth - 45) / 3,
    borderRadius: 20,
    backgroundColor: "#E7EEFB",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 16 / 11,
  },
  textContainer: {
   
    // backgroundColor: "red",
    // alignSelf:'center',
    // alignContent:'center',
    justifyContent:'center',
  },
  text: {
    // fontSize: textSize,
    // padding: 5,
    // //  width:'100%',
    // height: "100%",

  },
});

export default SingleEvent;
