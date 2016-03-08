/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  ListView,
  View
} from 'react-native';

import ListCell from './reactIOS/listcell';

class Member extends Component {
  constructor(){
    super();
    let MEMBERS = [
      {
        name: 'Erdinc Akkaya',
        type: 'Developer',
        joinedAt: '01.03.2016'
      },
      {
        name: 'Igor Matias',
        type: 'Developer',
        joinedAt: '01.03.2016'
      },
      {
        name: 'Maxim Kozlenko',
        type: 'Project Manager',
        joinedAt: '01.03.2016'
      },
    ];
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(MEMBERS)
    };
  }

  selectMember(member){
    console.log(member);
  }


  renderRow(rowData){
    return (
      <ListCell
        member={rowData}
        onPress={() => this.selectMember(rowData)}
      />
    );
  }

  render() {
    return(
      <ListView
        style={styles.listView}
        ref="listview"
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} // we need to bind this if not, ListCell's callback functions won't work.
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={true}
        showsVerticalScrollIndicator={false}
      />
    )
  }
}

class DispatchrDemo extends Component {
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'Dispatchr Team', index:0}}
        renderScene={(route, navigator) => <Member name={route.name} />}
      />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listView:{
    backgroundColor: '#1DAEDA',
    marginTop:64
  }
});

AppRegistry.registerComponent('DispatchrDemo', () => DispatchrDemo);
