import {useContext, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styleSheet from '../css/style.jsx';
import {userContext} from '../utility/userContext.js';
import axios from 'axios';
import {BACKEND_PROXY_URL, COMPANY_NAME} from '@env';

function Form({navigation}) {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const {userData, setUserData} = useContext(userContext);

  const validateMail = email => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(email)) setError('');
    else setError('Invalid Email');
    setEmail(email);
  };

  const validatePhone = phone => {
    const re = /^\+[1-9]{1,3}[\s-]?\d{9,15}$/;
    if (re.test(phone)) setError('');
    else setError('Invalid Phone Number');
    setMobile(phone);
  };

  const submitData = () => {
    if (error) return;
    if (!username || !email || !mobile || !message) {
      setError('Please fill all the fields');
      return;
    }
    setUserData({username, email, mobile, message});
    try {
      axios.post(`${BACKEND_PROXY_URL}/api/sendMail`, userData);
    } catch (err) {
      console.log(err);
      setError('Something went wrong');
      return;
    }
    navigation.navigate('SubmitScreen');
  };

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.heading}>{COMPANY_NAME}</Text>
      <View style={styleSheet.form}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={text => setusername(text)}
          value={username}
          style={styleSheet.formInput}
          placeholderTextColor="#000000"
        />
        <PhoneInput
          defaultValue={mobile}
          defaultCode="IN"
          layout="first"
          autoFocus
          placeholder="Enter Mobile"
          containerStyle={styleSheet.phoneContainer}
          textContainerStyle={styleSheet.phoneTextContainer}
          onChangeFormattedText={text => {
            validatePhone(text);
          }}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={text => validateMail(text)}
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
