import { View} from 'react-native';
import {React} from 'react';
import ImageDetail from "../components/ImageDetail";

const ImageScreen =()=>{
  return(

    <View>
    <ImageDetail title = "Moon"
    imageSource= {require('../images/moon.jpeg')}
    />

    <ImageDetail title = "Sunset"
    imageSource= {require('../images/sunset.jpeg')}
    />

    <ImageDetail title = "Beach"
    imageSource= {require('../images/beach.jpeg')}
    />
    </View>

  );
};


export default ImageScreen;