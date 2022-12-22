import {useState} from 'react';
import {React} from 'react';
import { Text, View, Button } from 'react-native';

const CounterScreen = () => {
    const [counter,setCounter] = useState(0);
    return(
        <View>
            <Button title="Increment"
            onPress={()=>{
                setCounter(counter+1);
            }}/>
            <Button title="Decrement"
            onPress={()=>{
                setCounter(counter-1);
            }}/>
            <Text> Counter: {counter}</Text>
        </View>

    );
};

export default CounterScreen;