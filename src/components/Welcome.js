
import React from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    AsyncStorage,
    NativeModules
} from 'react-native';
import CustomButton from './CustomButton';

const DeviceTyp = NativeModules.DeviceTypeModule;

export default class Welcome extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            technology: '',
            errorMsg: '',
            devMsg: ''
        }
        this.checkDev();
    }


    checkDev = () => {
        DeviceTyp.checkDeviceType()
            .then((res) => {
                console.log("resvalue: " + res);
                if (res != null && res != undefined && res == true) {
                    this.setState({ devMsg: "This App is running on an Emulator" })
                    console.log("resvalue: emu" + res);
                } else {
                    this.setState({ devMsg: "This App is running on a Device" })
                    console.log("resvalue: dev" + res);
                }
            });
    }

    render() {
        return (
            <ScrollView keyboardShouldPersistTaps='handled' contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>

                    <View style={{
                        flex: 1,
                        paddingHorizontal: 50,
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.titleTxt}>Welcome</Text>
                        <TextInput
                            placeholder="Name"
                            style={styles.inputype}
                            spellCheck={false}
                            autoCapitalize='words'
                            onChangeText={this.handleName}
                            placeholderTextColor="#E0E0E0" />

                        <TextInput
                            placeholder="Technology"
                            style={styles.inputype}
                            spellCheck={false}
                            autoCapitalize='words'
                            onChangeText={this.handleTech}
                            placeholderTextColor="#E0E0E0" />

                        <Text numberOfLines={2}
                            style={styles.errorMsgTxt}>{this.state.errorMsg}</Text>


                        <CustomButton title="Submit" onPress={this.onSubmit}
                            containerStyle={[styles.appButtonContainer, { backgroundColor: "skyblue" }]}
                            btnStyle={[styles.appButtonText, { color: "#fff" }]} />
                    </View>

                    <Text style={styles.noteStyle}>{this.state.devMsg}</Text>
                </View>
            </ScrollView>
        )
    }

    storeDataToAsync = async () => {
        console.log("name:  " + this.state.username + "tech:  " + this.state.technology);
        const userData = { "name": this.state.username, "tech": this.state.technology };
        try {
            await AsyncStorage.setItem(
                'userData',
                JSON.stringify(userData)
            );
        } catch (error) {
        }
    };

    handleName = (text) => {
        this.setState({ errorMsg: "", username: text })
    }

    handleTech = (text) => {
        this.setState({ errorMsg: "", technology: text })
    }


    onSubmit = () => {
        console.log("name:  1" + this.state.username + "tech:  " + this.state.technology);
        if (this.state.username != "") {
            this.storeDataToAsync();
            this.props.navigation.navigate('Home');
        } else {
            this.setState({ errorMsg: "Please enter the Name" })
        }

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
        justifyContent: 'space-between'
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

    noteStyle: {
        color: '#fff',
        fontSize: 18,
        padding: 15,
        fontWeight: '400',
        textAlign:'center',
        backgroundColor: '#FFC300',
        alignSelf: 'stretch'
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