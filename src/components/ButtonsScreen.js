
import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    AsyncStorage
} from 'react-native';
import CustomButton from './CustomButton';
import SliderButton from './SliderButton';

export default class ButtonsScreen extends React.PureComponent {

    constructor(props) {
        super(props);
        this.retrieveAsyncData();
    }

    retrieveAsyncData = async () => {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('userData'));
            if (value !== null) {
              console.log("User data:  "+value);
              this.props.navigation.setOptions({title: value.name})
            }
          } catch (error) {
          }
      };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>

                    <Text style={{
                        color: '#FFC300',
                        fontSize: 18,
                        alignSelf: "center",
                        marginBottom: 22
                    }}>
                        4 variations of a button
                    </Text>

                    <CustomButton title="Press me" onPress={this.onClick}
                        btnStyle={[styles.appButtonText, { color: "skyblue" }]} />

                    <CustomButton title="Press me" onPress={this.onClick}
                        containerStyle={[styles.appButtonContainer, { backgroundColor: "#E0E0E0" }]}
                        btnStyle={[styles.appButtonText, { color: "skyblue" }]} />

                    <CustomButton title="Press me" onPress={this.onClick}
                        containerStyle={[styles.appButtonContainer, { backgroundColor: "skyblue" }]}
                        btnStyle={[styles.appButtonText, { color: "#fff" }]} />

                    <SliderButton />

                </View>
            </SafeAreaView>
        );
    }

    onClick = () => {
        console.log("button pressed");
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: 'center',
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
    }
});