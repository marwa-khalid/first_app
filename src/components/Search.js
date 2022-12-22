import { StyleSheet, Text, View, } from "react-native";
import {React} from "react";

const Search = (props) => {
    return (
        <View>
            <View style={{backgroundColor:rgbColor()}}>
                <Text style={{fontSize:fontSize(),color:rgbColor(),fontFamily:fontFamily(),textAlign:fontAlign()}}>
                {props.name}
                </Text>
            </View>
        </View>
    );};

    const fontSize=()=> {
        const size=Math.floor(Math.random()*38+22);
        return `${size}px`;
    }

    const rgbColor=()=> {
        const red=Math.floor(Math.random()*256);
        const green=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);
        return `rgb(${red},${green},${blue})`;
    }

    const fontFamily=()=> {
        const list= ["helvetica","gabriola","arial","system-ui","serif","times new roman","sans-serif"];
        const value=Math.floor(Math.random()*7);
        const font=list[value];
        return `${font}`;
    }

    const fontAlign=()=> {
        const list= ["left","center","right", "justify"];
        const num=Math.floor(Math.random()*4);
        const font=list[num];
        return `${font}`;
    }
    const styles=StyleSheet.create({
        
    }
);

export default Search;