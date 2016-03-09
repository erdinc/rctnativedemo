import React, {
    Component,
    StyleSheet,
    Text,
    TextInput,
    Image,
    View,
    Dimensions,
    TouchableHighlight,
    Alert
} from 'react-native';

class UserLoginPage extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bg} source={require('./../../assets/icons/login_bg.png')} />
                <View style={styles.header}>
                    <Image style={styles.mark} source={require('./../../assets/icons/login_mark.png')} />
                </View>
                <View style={styles.inputs}>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputUsername} source={require('./../../assets/icons/login_person.png')}/>
                        <TextInput
                            style={[styles.input, styles.whiteFont]}
                            placeholder="Username"
                            placeholderTextColor="#FFF"
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputPassword} source={require('./../../assets/icons/login_lock.png')}/>
                        <TextInput
                            password={true}
                            style={[styles.input, styles.whiteFont]}
                            placeholder="Password"
                            placeholderTextColor="#FFF"
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />
                    </View>
                </View>

                <TouchableHighlight onPress={this.onSignIn.bind(this)}>
                    <View style={styles.signin}>
                        <Text style={styles.whiteFont}>Sign In</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }

    onSignIn() {
        if (!this.state.username) {
            return Alert.alert(
                'Username is required to sign in',
                '',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]
            );
        }

        this.props.router.setPage('MembersPage');
        this.state = {
            username: '',
            password: ''
        };
    }
}

var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
        marginLeft: 15,
        width: 20,
        height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
    }
});


export default UserLoginPage;