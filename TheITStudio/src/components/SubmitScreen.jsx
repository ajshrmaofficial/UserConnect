import { useContext, useEffect } from "react";
import { userContext } from "../utility/userContext";
import { Text, View } from "react-native";
import styleSheet from "../css/style";

function SubmitScreen({navigation}){
    const {userData, setUserData} = useContext(userContext);

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home')
        }, 3000)
    }, [])

    return(
        <View style={styleSheet.container}>
            <Text style={[{position: 'absolute', top: '40%'}, styleSheet.subHeading]}>Thank you for your submission, {userData.username}!</Text>
            <Text style={styleSheet.secondaryText}>Redirecting to home screen in 3 seconds...</Text>
        </View>
    )
}

export default SubmitScreen;