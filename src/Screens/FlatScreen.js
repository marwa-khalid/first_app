import { StyleSheet, Text, FlatList } from 'react-native';
import {React} from 'react';

export default function FlatScreen() {
  const friends= [          //array is static can be replaced by api call.
      {name:'Ahsan'},
      {name:'Kainat'},
      {name:'Hamza'}
  ];

  return(
<FlatList 
  data={friends}          
    renderItem={({item})=> {  
      return(
        <Text style={styles.textStyle}>
          {item.name}
        </Text>
      );  
    }}   

/>
  );    
}  
const styles = StyleSheet.create({
  textStyle:
  {
    marginLeft: 50,
    marginRight: 50,
    paddingBottom:10,
    fontSize:20,
    color: 'indianred'
  }

});