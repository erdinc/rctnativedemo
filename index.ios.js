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

import MembersPage from './reactIOS/components/members/page';
import UserLoginPage from './reactIOS/components/user/login';

class DispatchrDemo extends Component {
    setPage(page) {
        console.log('Current routes ->', this.refs.navigator.getCurrentRoutes());
        switch (page) {
            case 'MembersPage':
                this.refs.navigator.push({
                    name: 'MembersPage',
                    component: MembersPage
                });
                break;
        }
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                style={styles.container}
                // initialRoute={{name: 'MembersPage', index: 0, component: MembersPage}}
                initialRoute={{name: 'UserLoginPage', index: 0, component: UserLoginPage}}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    if (route.component) {
                        return React.createElement(route.component, {navigator, route, router: this});
                    }
                }}
            />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('DispatchrDemo', () => DispatchrDemo);
