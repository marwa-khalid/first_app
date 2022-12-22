//Image
import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    )
}

export default ImageDetail;