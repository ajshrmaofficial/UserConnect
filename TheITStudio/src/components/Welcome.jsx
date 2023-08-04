import { View, Text, TouchableOpacity } from "react-native";
import styleSheet from "../css/style.jsx";
import {COMPANY_NAME} from '@env'

function Welcome({navigation}){
    return(
        <View style={styleSheet.container}>
            <Text style={styleSheet.heading}>{COMPANY_NAME}</Text>
            <Text style={styleSheet.subHeading}>User Connect</Text>
            <Text style={styleSheet.secondaryText}>Connect with {COMPANY_NAME} with your feedback.</Text>
            <TouchableOpacity style={styleSheet.welcomeBtn} onPress={()=>navigation.navigate('Form')}>
                <Text style={styleSheet.secondaryText}></Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome;