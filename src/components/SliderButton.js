import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Slider from 'react-native-slide-to-unlock';

const SliderButton = (props) => {
    return (
        <Slider
            childrenContainer={{ backgroundColor: 'white' }}
            onEndReached={() => {
                //Alert.alert('Slide', 'slided to continue!');
            }}
            containerStyle={{
                marginTop: 16,
                backgroundColor: 'white',
                borderRadius: 2,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}
            sliderElement={
                <Image
                    style={{
                        width: 40,
                        padding: 8,
                        borderRadius: 4,
                        height: 40,
                        backgroundColor: 'skyblue',
                    }}
                    source={require('../assets/small_diamond.png')}
                />
            }
        >
            <Text style={{
                color: "skyblue"
            }}>{'Slide me to continue'}</Text>
        </Slider>
    );
};

export default SliderButton;