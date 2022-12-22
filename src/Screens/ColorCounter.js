import {React,useState} from 'react';
import { View, Button, FlatList} from 'react-native';

const ColorCounter = () => {
    const[colors,setColors] = useState([]);
    console.log(colors)
    

    return(
        <View>
            <Button title="Change Color"
            onPress={()=>{
                setColors([...colors,randomRgb()]);
            }}/>
            <FlatList
            data={colors}
            keyExtractor={(item)=>item}
            renderItem={({item})=>{

                return(
                    <View
                    style={{height:100,width:200,backgroundColor: item}}/>

                );
            }}/>
            
        </View>

    );
}

const randomRgb =()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;

};

export default ColorCounter;