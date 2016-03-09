var MEMBERS = [
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
    {
        name: 'Maria',
        type: 'QA',
        joinedAt: '08.03.2016'
    },
];

import React, {
    Component,
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TabBarIOS
} from 'react-native';

import config from './../../config';

import NavigationBar from 'react-native-navigation-bar';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';

import MembersList from './members-list';
import MembersMap from './members-map';

class MembersPage extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            tab: 'members',
            icons: {},
            ready: false
        };

        var readyCb = () => {
            if (Object.keys(this.state.icons).length === 2)
                this.setState({ready: true})
        };

        Icon.getImageSource('ios-arrow-left', 30, 'white').then((source) => {
            this.state.icons.arrowLeft = source;
            readyCb();
        });
        Icon.getImageSource('ios-arrow-right', 30, 'white').then((source) => {
            this.state.icons.arrowRight = source;
            readyCb();
        });
    }

    onBackHandle() {
        this.props.navigator.pop();
    }

    _renderContent(color:string, pageText:string, num:number) {
        return (
            <View style={[styles.tabContent, {backgroundColor: color}]}>
                <Text style={styles.tabText}>{pageText}</Text>
                <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
            </View>
        );
    }

    renderLoadingView() {
        return (
          <View style={styles.loader}>
              <Text>
                  Loading...
              </Text>
          </View>
        );
    }

    render() {
        if (!this.state.ready) {
            return this.renderLoadingView();
        }

        return (
          <TabNavigator>
              <TabNavigator.Item
                selected={this.state.tab === 'members'}
                title="Members"
                renderIcon={() => <Icon style={{top: 10}} name="ios-people-outline" size={40} color="#007aff" /> }
                renderSelectedIcon={() => <Icon style={{top: 10}} name="ios-people" size={40} color="#007aff" /> }
                onPress={() => this.setState({tab: 'members'})}>

                  <View>
                      <NavigationBar
                        title={'Team Members'}
                        height={config.ui.menuHeight}
                        titleColor={'#fff'}
                        backgroundColor={'#FF3366'}

                        leftButtonIcon={this.state.icons.arrowLeft}
                        leftButtonTitle={'Log out'}
                        leftButtonTitleColor={'#fff'}
                        onLeftButtonPress={this.onBackHandle.bind(this)}

                        // rightButtonIcon={}
                        // rightButtonTitle={'forward'}
                        // rightButtonTitleColor={'#fff'}
                        // onRightButtonPress={onForwardHandle}
                      />

                      <View style={styles.container}>
                          <Image source={this.state.userIcon} />
                          <MembersList members={MEMBERS} />
                      </View>
                  </View>

              </TabNavigator.Item>

              <TabNavigator.Item
                selected={this.state.tab === 'map'}
                title="Map"
                renderIcon={() => <Icon style={{top: 7}} name="ios-location-outline" size={33} color="#007aff" /> }
                renderSelectedIcon={() => <Icon style={{top: 7}} name="ios-location" size={33} color="#007aff" /> }
                onPress={() => this.setState({tab: 'map'})}>
                  
                  <MembersMap members={MEMBERS} />

              </TabNavigator.Item>
              
          </TabNavigator>

        );

        /*
        (
              <TabBarIOS
                tintColor="white"
                barTintColor="#ba78ff">

                <TabBarIOS.Item
                    title="Members"
                    icon={this.state.icons.user}
                    selected={this.state.tab === 'members'}
                    onPress={() => {
                        this.state.tab = 'members';
                    }}>

                    <View>
                        <NavigationBar
                          title={'Team Members'}
                          height={config.ui.menuHeight}
                          titleColor={'#fff'}
                          backgroundColor={'#FF3366'}

                          leftButtonIcon={this.state.icons.arrowLeft}
                          leftButtonTitle={'Log out'}
                          leftButtonTitleColor={'#fff'}
                          onLeftButtonPress={this.onBackHandle.bind(this)}

                          // rightButtonIcon={}
                          // rightButtonTitle={'forward'}
                          // rightButtonTitleColor={'#fff'}
                          // onRightButtonPress={onForwardHandle}
                        />

                        <View style={styles.container}>
                            <Image source={this.state.userIcon} />
                            <MembersList />
                        </View>
                    </View>

                </TabBarIOS.Item>


                <TabBarIOS.Item
                  title="Map"
                  icon={this.state.icons.map}
                  selected={this.state.tab === 'map'}
                  onPress={() => {
                        this.state.tab = 'map';
                    }}>

                    <Text>OK</Text>

                  </TabBarIOS.Item>

            </TabBarIOS>
        );
        */
    }
}

var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: config.ui.contentTopMargin,
        height: windowSize.height - config.ui.contentTopMargin
    },
    loader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});

export default MembersPage;