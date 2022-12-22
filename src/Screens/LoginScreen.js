import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {db} from './firebase.js';
import {collection,setDoc,doc, getDoc} from "firebase/firestore";

const LoginScreen=({navigation})=>
{
	const [name, setName]= useState('');
	const [email, setEmail]=useState('');
	
	function create()
	{
		setDoc(doc(collection(db,"users")),{
			name: name,
			email: email,
		}).then(()=>{
			console.log("data saved");
		}).catch(error=>{console.log()})
		}
		
		function getDatawithID(){
		getDoc(doc(db,"users","ciZareNo1QPySwJcbGaK")).then(docData=>{
			if(docData.exists())
			{
				setName(docData.data().name);
				setEmail(docData.data().email);
			}
			else
			{
				console.log("no such data exists");
			}
		}).catch(error=>{console.log(error)})
  }
		
		
    function update() {
    updateDoc(doc(db, "users", 'ciZareNo1QPySwJcbGaK'), {     
      username: username,
      email: email,
    }).then(() => { 
      // Data saved successfully!
      console.log('data submitted');  

    }).catch((error) => {
          // The write failed...
          console.log(error);
    });
    }

    function deleteData() {
          deleteDoc(doc(db, "users", 'ciZareNo1QPySwJcbGaK'));    
    }

    function getAlldata() {
      getDocs(collection(db, "users")).then(docSnap => {
        let users = [];
        docSnap.forEach((doc)=> {
            users.push({ ...doc.data(), id:doc.id })
        });
            console.log("Document data:", users);       
      });
    }

    function getDataWithQuery () {
      getDocs(query(collection(db, "users"), where('email','==', 'NewUser@gmail.com'))).then(docSnap => {
         let users = []; 
          docSnap.forEach((doc)=> {
          users.push({ ...doc.data(), id:doc.id })
      });
          console.log("Document data:", users[0].username);           
      });
		
		
		
		
		}
	
	
	
	return(
	<View behavior='padding' style={styles.container}>
	 <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
         
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
         onPress={create} 
          style={styles.submit}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        
      </View>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
         onPress={getDatawithID} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Data with ID</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={update} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={deleteData} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={getAlldata} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get All Data</Text>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={getDataWithQuery} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Data with Query</Text>
        </TouchableOpacity>
        
      </View>
	</View>
	);
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  submit:{
    backgroundColor:'#227C70',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#D0B8A8',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,

  },

  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})

export default LoginScreen;