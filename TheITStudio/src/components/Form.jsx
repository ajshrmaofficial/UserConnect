import {useContext, useRef, useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import styleSheet from '../css/style.jsx';
import {userContext} from '../utility/userContext.js';
import {BACKEND_PROXY_URL, COMPANY_NAME} from '@env';

function Form({navigation}) {
  const {userData, setUserData} = useContext(userContext);
  const {username, email, mobile, message} = userData;
  const [error, setError] = useState('');

  const validator = (text, type) => {
    let re;
    if (type == 'email') re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    else if (type == 'mobile') re = /^\+[1-9]{1,3}[\s-]?\d{9,15}$/;
    if (re.test(text)) setError('');
    else setError(`Invalid ${type}`);
    setUserData({...userData, [type]: text});
  };

  const onTextChange = (text, type) => {
    setUserData({...userData, [type]: text});
  };

  const submitData = async() => {
    if (error) return;
    if (!username || !email || !mobile || !message) {
      setError('Please fill all the fields');
      return;
    }
    setUserData({username, email, mobile, message});
    try {
      const response = await fetch(`${BACKEND_PROXY_URL}/api/sendMail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.text();
      console.log(data);
    } catch (err) {
      console.log(err);
      setError('Something went wrong');
      return;
    }
    setUserData({username: '', email: '', mobile: '', message: ''});
    navigation.navigate('SubmitScreen');
  };

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.heading}>{COMPANY_NAME}</Text>
      <View style={styleSheet.form}>
        <TextInput
          placeholder="Enter Name"
          onChangeText={text => onTextChange(text, 'username')}
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
            validator(text, 'mobile');
          }}
        />
        <TextInput
          placeholder="Enter Email"
          onChangeText={text => validator(text, 'email')}
          value={email}
          style={styleSheet.formInput}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Enter Your Message"
          onChangeText={text => onTextChange(text, 'message')}
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