// // this is the list component
// // 'use strict'

import React, { Component } from "react";
import {
  Text, // functions similar to h1, h2, etc in html
  View, // functions similar to a div in html
  Image, // functions similar to image in html
  StyleSheet, // helps define the styling/css
  Button, // functions similar to button in html
  TouchableHighlight, // handles user touches
  ScrollView, // helps make the screen scroll
  NavigatorIOS,
  Alert

} from "react-native";
import WineData from "../mock/wineList.json";

//in react native, make sure to capitalize component name!
//deleted drinks in json file that had no image URL as that caused an error message

// function to show alert upon adding to wish list
const addToWishList = () => {
  Alert.alert(
    'message:',
    'add to wish list:' ,
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK pressed')},
    ],
    { cancelable: false }
  )
};

const viewDescription = wine => {
  console.log(wine);
};

// component for wine card
const WineCard = props => (
  <View style={styles.wineCardContainer}>
    <View style={styles.parentImage}>
      <Image source={{ uri: props.image }} style={styles.images} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.containerText}>{props.name}</Text>
      <Text style={styles.containerText}>${props.price}</Text>
      <Text style={styles.containerText}>save: ${props.save}</Text>
    </View>
    <View style={styles.wineBtn}>
      <Button
      onPress={addToWishList}
        title="+"
        color="#ffffff"
        accessibilityLabel="add this drink to your wish list"
        // fontWeight="bold"
      />
    </View>
  </View>
);

class WineList extends Component {
  render() {
    return (
      // wrap outer most return in a scroll view so that the screen becomes scrollable
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.title}>Wine Finder</Text>
        </View>
        <ScrollView>
          {WineData.map((wineDetail, index) => {
            return (
              <View key={index}>
                {wineDetail.result.map((wineResults, index) => {
                  return (
                    <View>
                    <TouchableHighlight
                      key={index}
                      onPress={() => viewDescription(wineResults)}
                      underlayColor="#ffffff"
                    >
                      <WineCard
                        image={wineResults.image_thumb_url}
                        name={wineResults.name}
                        price={wineResults.price_in_cents / 100}
                        save={
                          wineResults.limited_time_offer_savings_in_cents / 100
                        }
                      />
                      </TouchableHighlight>
                      </View>
                        );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default WineList;

// styling
const styles = StyleSheet.create({
  background: {
    display: "flex",
    marginTop: 25,
    backgroundColor: "#ffffff",
    fontFamily: "Trebuchet MS"
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#000000",
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold"
  },
  wineCardContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ffffff"
  },
  containerAlt: {
    backgroundColor: "#3f3f3f"
  },
  containerText: {
    color: "#000000",
    marginBottom: 2,
    fontWeight: "bold",
    fontSize: 14
    // paddingTop: 5,
  },
  infoContainer: {
    width: 200,
    overflow: "hidden",
    marginTop: 15
  },
  images: {
    width: 70,
    height: 90
  },
  wineBtn: {
    backgroundColor: "#000000",
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  }
});




