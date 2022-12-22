import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import Search from '../components/Search';
import {Feather} from "@expo/vector-icons";
import { SearchBar } from 'react-native-screens';

const SearchScreen = () => {
        
    const[name, setname]=useState("");
    return (
        <View>
            <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle}
              name="search"/>
            <TextInput style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search"
                value={name}
                onChangeText={newValue=>setname(newValue)}/>
            </View>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
            <View style={{marginTop: 5}}></View>
            <SearchBar name={name}/>
        </View>
    );
};

const styles=StyleSheet.create({
    iconStyle:{
        alignSelf:'center',
        fontSize:25,
        marginHorizontal:15,
    },
    inputStyle:{
        flex:1,
    },
    backgroundStyle:{
        marginTop:10,
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
    }
});

export default SearchScreen;