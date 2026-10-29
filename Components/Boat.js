import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

// Ex1: User-defined component Movie with properties title and year
const Boat = ({icon_name, icon_color,theme,info,poster}) => {
    return (
        <View>
            <Text style={{fontSize: 25}}>
                <FontAwesome6
                    name={icon_name}
                    size={25}
                    color={icon_color}
                />
                {theme}
            </Text>

            <Text>{info}</Text>

            <Image
                source={poster}
                style={{width: '100%', height: 340}}
                resizeMode="cover"
            />
        </View>
    );
};

export default Boat;