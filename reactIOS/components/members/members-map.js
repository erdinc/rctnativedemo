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
import { SegmentedControls } from 'react-native-radio-buttons'

var Mapbox = require('react-native-mapbox-gl');

class MembersMap extends Component {

    static propTypes = {
        members: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            icons: {},
            ready: false,
            option: 'Native',
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

    setSelectedOption(option) {
        this.setState({
            option: option
        });
    }

    render() {
        const options = [
            "Native",
            "MapBox"
        ];

        const mapSetting = {
            center: {
                latitude: 40.72052634,
                longitude: -73.97686958312988
            },
            zoom: 11,
            annotations: [{
                coordinates: [40.72052634, -73.97686958312988],
                'type': 'point',
                title: 'This is marker 1',
                subtitle: 'It has a rightCalloutAccessory too',
                rightCalloutAccessory: {
                    url: 'https://cldup.com/9Lp0EaBw5s.png',
                    height: 25,
                    width: 25
                },
                annotationImage: {
                    url: 'https://cldup.com/CnRLZem9k9.png',
                    height: 25,
                    width: 25
                },
                id: 'marker1'
            }, {
                coordinates: [40.714541341726175,-74.00579452514648],
                'type': 'point',
                title: 'Important!',
                subtitle: 'Neat, this is a custom annotation image',
                annotationImage: {
                    url: 'https://cldup.com/7NLZklp8zS.png',
                    height: 25,
                    width: 25
                },
                id: 'marker2'
            }, {
                'coordinates': [[40.76572150042782,-73.99429321289062],[40.743485405490695, -74.00218963623047],[40.728266950429735,-74.00218963623047],[40.728266950429735,-73.99154663085938],[40.73633186448861,-73.98983001708984],[40.74465591168391,-73.98914337158203],[40.749337730454826,-73.9870834350586]],
                'type': 'polyline',
                'strokeColor': '#00FB00',
                'strokeWidth': 4,
                'strokeAlpha': .5,
                'id': 'foobar'
            }, {
                'coordinates': [[40.749857912194386, -73.96820068359375], [40.741924698522055,-73.9735221862793], [40.735681504432264,-73.97523880004883], [40.7315190495212,-73.97438049316406], [40.729177554196376,-73.97180557250975], [40.72345355209305,-73.97438049316406], [40.719290332250544,-73.97455215454102], [40.71369559554873,-73.97729873657227], [40.71200407096382,-73.97850036621094], [40.71031250340588,-73.98691177368163], [40.71031250340588,-73.99154663085938]],
                'type': 'polygon',
                'fillAlpha':1,
                'strokeColor': '#fffff',
                'fillColor': 'blue',
                'id': 'zap'
            }]
        };

        var renderMap = () => {
            if (this.state.option === 'Native') {
                return (
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
                );
            } else if (this.state.option === 'MapBox') {
                return (
                  <Mapbox
                    style={styles.containerMapbox}
                    direction={0}
                    rotateEnabled={true}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    ref={'mapbox'}
                    accessToken={'pk.eyJ1IjoiaWdvcm1hdGlhc2Nyb3Nzb3ZlciIsImEiOiJjaWxtN2RzeGIwMDR4dHFsendjdWExZjVoIn0.EGZ33QuGoaxSo12ca759HA'}
                    centerCoordinate={mapSetting.center}
                    zoomLevel={mapSetting.zoom}
                    />
                );
            }
        };

        return (
        <View>

            <View style={styles.containerTop}>
                <SegmentedControls
                  options={options}
                  onSelection={this.setSelectedOption.bind(this)}
                  selectedOption={this.state.option}
                />
            </View>
            {renderMap()}
        </View>
        )
    }
}

var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        // marginTop: config.ui.contentTopMargin,
        height: windowSize.height - config.ui.contentTopMargin
    },
    map: {
        height: windowSize.height - config.ui.bottomBarHeight - config.ui.contentTopMargin - 5,
        margin: 0,
        borderWidth: 0,
    },
    containerTop: {
        // height: config.ui.menuHeight,
        padding: 10,
        paddingTop: 10 + config.ui.topBarHeight,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    containerMapbox: {
        flex: 1,
        height: windowSize.height - config.ui.bottomBarHeight - config.ui.contentTopMargin - 5,
        width: windowSize.width
    }
});

export default MembersMap;
