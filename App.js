import React, {Component} from 'react';
import { View, Card } from 'react-native';
import WineList from './screens/wineList.js';


class App extends Component {
  render() {
    return (
      <View>
        <View><WineList /></View>
      </View>
      );
  }
}

export default App
