
import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Keyboard,
    AsyncStorage,
    NativeModules
} from 'react-native';
import CustomButton from './CustomButton';

export default class Home extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            technology:''
        }
       this.retrieveAsyncData();    
    }

    render() {
         
        return (
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>

                    <Text style={styles.titleTxt}>{this.state.username}</Text>
                    <Text style={styles.titleTxt}>{this.state.technology}</Text>

                    <CustomButton title="Show Buttons Screen" onPress={this.onShowButtons}
                        containerStyle={[styles.appButtonContainer, { backgroundColor: "skyblue" }]}
                        btnStyle={[styles.appButtonText, { color: "#fff" }]} />
                </View>
            </ScrollView>
        )
    }

    retrieveAsyncData = async () => {
        try {
          const value = JSON.parse(await AsyncStorage.getItem('userData'));
          if (value !== null) {
            console.log("User data:  "+value);
            this.props.navigation.setOptions({title: value.name})
            this.setState({username: value.name, technology:value.tech})
          }
        } catch (error) {
        }
      };

    onShowButtons = () => {
        this.props.navigation.navigate('ButtonsScreen')
    }
}


const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'center',
    },

    inputype: {
        fontSize: 18,
        backgroundColor: 'white',
        padding: 6,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'stretch',
        textAlign: 'center',
        margin: 8
    },

    titleTxt: {
        color: '#FFC300',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: "center",
        marginBottom: 20
    },

    appButtonContainer: {
        backgroundColor: "skyblue",
        borderRadius: 4,
        padding: 10,
        marginTop: 16,
        paddingVertical: 10
    },
    appButtonText: {
        fontSize: 14,
        alignSelf: "center"
    },

    errorMsgTxt: {
        fontSize: 14,
        color: 'red',
        marginVertical: 12
    }
});