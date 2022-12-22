
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const AssignmentScreen = () =>{
  
  return (
    <View>
        <View style={styles.container}>
        <TouchableOpacity style={styles.buttonStyle1}>
            <Text style={styles.textStyle}>Start</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.buttonStyle3}>
            <Text style={styles.textStyle}>End</Text>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.buttonStyle2}>
            <Text style={styles.textStyle}>Middle</Text>
        </TouchableOpacity>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonStyle1:
  {
    width: 200,
    height: 100,
    backgroundColor: '#008b8b',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle2:
  {
    width: 200,
    height: 100,
    backgroundColor: '#8fbc8f',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
  },
  buttonStyle3:
  {
    width: 200,
    height: 100,
    backgroundColor: '#008080',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0
  },
  textStyle:
  {
    fontSize: 20,
    color: "#000000",
    alignSelf: 'center'
  }
});

export default AssignmentScreen;