import { useContext, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styleSheet from "../css/style.jsx";
import { userContext } from "../utility/userContext.js";
import axios from "axios";
import {BACKEND_PROXY_URL} from '@env'

function Form({navigation}) {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const {userData, setUserData} = useContext(userContext)

  const submitData = async() => {
    setUserData({username, email, mobile, message})
    try {
      const response = await axios.post(`${BACKEND_PROXY_URL}/api/sendMail`, userData);
      console.log(response.data);
    }
    catch(err) {
      console.log(err)
      return
    }
    navigation.navigate('SubmitScreen')
  };

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.heading}>TheITStudio</Text>
      <View style={styleSheet.form}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={text => setusername(text)}
          value={username}
          style={styleSheet.formInput}
          placeholderTextColor="#000000"
        />
        <TextInput
          placeholder="Enter Mobile"
          onChangeText={text => setMobile(text)}
          value={mobile}
          style={styleSheet.formInput}
          keyboardType="numeric"
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          value={email}
          style={styleSheet.formInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Enter Your Message"
          onChangeText={text => setMessage(text)}
          value={message}
          style={styleSheet.formInput}
          placeholderTextColor="black"
        />
        {error && <Text style={styleSheet.error}>* {error}</Text>}
      </View>
      <TouchableOpacity style={styleSheet.submitBtn} onPress={submitData}>
        <Text style={{color: 'white', fontSize: 18}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Form;