import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import SingleEvent from "../../../Componant/SingleEvent";
import { ScrollView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleEventQuiz = () => {
  const data = [
    {
      title: "Freehold",
      innerData: [
        {
          text: "Case 1. Some case name",
        },
        {
          text: "Case 2. Some case name",
        },
        {
          text: "Case 3. Some case name",
        },
        {
          text: "Case 4. Some case name",
        },
      ],
    },
    {
      title: "Freehold 1",
      innerData: [
        {
          text: "Case 1. Some case name",
        },
        {
          text: "Case 2. Some case name",
        },
        {
          text: "Case 3. Some case name",
        },
        {
          text: "Case 4. Some case name",
        },
        {
          text: "Case 5. Some case name",
        },
        {
          text: "Case 6. Some case name",
        },
        {
          text: "Case 7. Some case name",
        },
        {
          text: "Case 8. Some case name",
        },
        {
          text: "Case 9. Some case name",
        },
        {
          text: "Case 10. Some case name",
        },
      ],
    },
  ];

  return (
    <View style={{ backgroundColor: "#f5f8ff", flex: 1, alignSelf: "center" }}>
      <ScrollView style={{height:'100%',marginBottom:150}}>
        <View
          style={{
            padding: 20,
            alignSelf: "center",
            width: windowWidth,
            marginBottom: 50,
          }}
        >
          {data.map((x, i) => (
            <View key={i}>
              <Text style={{ fontSize: 20, fontWeight: "600", padding: 10 }}>
                {x.title}
              </Text>

              <FlatList
                scrollEnabled={false}
                data={x.innerData}
                renderItem={({ item }) => (
                  <View style={{ flex: 1, margin: 5, flexDirection: "column" }}>
                    <SingleEvent Data={item} />
                  </View>
                )}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleEventQuiz;

const styles = StyleSheet.create({});
