'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Platform
} from 'react-native';

class ListCell extends Component {
  createTouchable(){
    let TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }
    return TouchableElement;
  }

  render(){
    let TouchableElement = this.createTouchable();
    return (
      <View>
        <TouchableElement onPress={this.props.onPress}>

          <View style={styles.row}>

            <Image
              style={styles.cellImage}
              source={require('./member.png')}
            />

            <View style={styles.textContainer}>
              <Text style={styles.text}>{this.props.member.name}</Text>
              <Text style={styles.text}>{this.props.member.type}</Text>
            </View>

          </View>

        </TouchableElement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#F5F6F6',
    fontSize: 12,
    fontStyle: 'normal'

  },
  textContainer: {
    flex: 1
  },
  row:{
    backgroundColor: '#3D3D3D',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 60,
    marginRight: 10,
    width: 60,
    borderRadius: 10
  },
});

module.exports = ListCell;
