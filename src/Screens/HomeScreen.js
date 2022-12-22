import { StyleSheet, View, Button} from 'react-native';
import React from 'react';

const HomeScreen=(props) =>{
  return (
    <View style={styles.textStyle}>

      <View style={styles.buttonText}>
        <Button 
          title='Go to Flat Screen'     
          onPress= {()=>props.navigation.navigate('Flat')}
        />
      </View>

      <View style={styles.buttonText}>
        <Button 
          title='Go to Image'     
          onPress= {()=>props.navigation.navigate('Image')}
        />
      </View>

      <View style={styles.buttonText}>
        <Button 
          title='Go to Assignment page'     
          onPress= {()=>props.navigation.navigate('Assignment')}
        />
      </View>

      <View style={styles.buttonText} bg-dark>
        <Button 
          title='Go to Change Color Screenr'     
          onPress= {()=>props.navigation.navigate('Color')}
        />
      </View>

      <View style={styles.buttonText}>
        <Button 
          title='Go to Counter Screen'     
          onPress= {()=>props.navigation.navigate('Counter')}
        />
      </View>

      <View style={styles.buttonText}>
        <Button 
          title='Go to Search Screen'
          style = {{backgroundColor:'grey'}}     
          onPress= {()=>props.navigation.navigate('Search')}
        />
      </View>

      <View style={styles.buttonText}>
        <Button 
          title='Go to Login Screen'
          style = {{backgroundColor:'grey'}}     
          onPress= {()=>props.navigation.navigate('Login')}
        />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    margin:20
  },
  buttonText:{
    margin: 10,
    fontSize:18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    backgroundColor: 'grey'
  }
});

export default HomeScreen;