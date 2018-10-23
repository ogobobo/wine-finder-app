// this is the list component
import React, { Component } from "react";
import { Text, View } from "react-native";
import WineData from "../mock/wineList.json";

//in react native, make sure to capitalize component name!
class WineList extends Component {
  render() {
    return (
      <View>
        <Text> the wine list goes here </Text>
        {WineData.map((wineDetail, index) => {
          return (
            <Text>
              {wineDetail.result.map((wineName, index) => {
                return <Text>{wineName.name}</Text>;
              })}
            </Text>
          );
        })}
      </View>
    );
  }
}

export default WineList;
