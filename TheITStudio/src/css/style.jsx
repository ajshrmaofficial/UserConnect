import {StyleSheet} from 'react-native';

const styleSheet = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    color: '#0A79DF',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subHeading: {
    color: '#0A79DF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: '#DBDBD6',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    position: 'absolute',
    bottom: '5%',
  },
  welcomeBtn: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    bottom: "10%",
    backgroundColor: '#0A79DF',
  },
  form: {
    width: '90%',
    alignItems: 'center',
    position: 'absolute',
    bottom: '30%',
    },
  formInput: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#DBDBD6',
    fontSize: 18,
    color: 'black',
  },
  submitBtn: {
    backgroundColor: '#0A79DF',
    padding: 15,
    width: '90%',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    bottom: '10%',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontSize: 13,
    position: 'absolute',
    top: '100%',
    },
});

export default styleSheet;
