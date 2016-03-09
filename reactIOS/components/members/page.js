import React, {
    Component,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

import config from './../../config';

import NavigationBar from 'react-native-navigation-bar';

import MembersList from './list';

class MembersPage extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    onBackHandle() {
        this.props.navigator.pop();
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={'Team Members'}
                    height={config.ui.menuHeight}
                    titleColor={'#fff'}
                    backgroundColor={'#FF3366'}

                    // leftButtonIcon={}
                    leftButtonTitle={'Log out'}
                    leftButtonTitleColor={'#fff'}
                    onLeftButtonPress={this.onBackHandle.bind(this)}

                    // rightButtonIcon={}
                    // rightButtonTitle={'forward'}
                    // rightButtonTitleColor={'#fff'}
                    // onRightButtonPress={onForwardHandle}
                />

                <View style={styles.container}>
                    <MembersList />
                </View>
            </View>
        );
    }
}

var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#3d3d3d',
        marginTop: config.ui.contentTopMargin,
        height: windowSize.height - config.ui.contentTopMargin
    }
});

export default MembersPage;