import React, {
    Component,
    StyleSheet,
    Text,
    ListView,
    View,
    MapView,
    Dimensions
} from 'react-native';

import config from './../../config';

import NavigationBar from 'react-native-navigation-bar';
import Icon from 'react-native-vector-icons/Ionicons';

class MembersMap extends Component {

    static propTypes = {
        members: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            icons: {},
            ready: false
        };

        var readyCb = () => {
            if (Object.keys(this.state.icons).length === 3)
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
        Icon.getImageSource('map', 30, 'white').then((source) => {
            this.state.icons.map = source;
            readyCb();
        });
    }

    selectMember(member) {
        console.log(member);
    }

    render() {
        return (
        <View>
            <NavigationBar
              title={'Native Map'}
              height={config.ui.menuHeight}
              titleColor={'#fff'}
              backgroundColor={'#FF3366'}

              // leftButtonIcon={this.state.icons.arrowLeft}
              // leftButtonTitle={'Log out'}
              leftButtonTitleColor={'#fff'}
              // onLeftButtonPress={this.onBackHandle.bind(this)}

              rightButtonIcon={this.state.icons.map}
              rightButtonTitle={'MapBox'}
              rightButtonTitleColor={'#fff'}
              // onRightButtonPress={onForwardHandle}
            />

            <View style={styles.container}>
                <MapView
                  style={styles.map}
                  showsUserLocation={true}
                  followUserLocation={true}
                  pitchEnabled={true}
                  region={{
                      latitude: 39.06,
                      longitude: -95.22,
                      latitudeDelta: 0.1,
                      longitudeDelta: 0.1
                  }}
                  annotations={[{
                      longitude: 39.06,
                      latitude: -95.22,
                      title: 'You Are Here',
                  }]}
                />
            </View>
        </View>
        )
    }
}

var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: config.ui.contentTopMargin,
        height: windowSize.height - config.ui.contentTopMargin
    },
    map: {
        height: windowSize.height - config.ui.bottomBarHeight - config.ui.contentTopMargin,
        margin: 0,
        borderWidth: 0,
    },
});

export default MembersMap;
