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

import Icon from 'react-native-vector-icons/Ionicons';

class MemberItem extends Component {
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

            <View>
              <Icon style={styles.cellImage} name="ios-person" size={60} color="#ba78ff" />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textName}>{this.props.member.name}</Text>
              <Text style={styles.textRole}>{this.props.member.type}</Text>
            </View>

          </View>

        </TouchableElement>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textName: {
    color: '#333',
    fontSize: 16,
    fontStyle: 'normal'
  },
  textRole: {
    color: '#666',
    fontSize: 13,
    fontStyle: 'normal'

  },
  textContainer: {
    flex: 1
  },
  row:{
    backgroundColor: 'transparent',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  cellImage: {
    height: 60,
    width: 60,
  }
});

export default MemberItem;
