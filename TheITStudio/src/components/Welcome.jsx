import { View, Text, TouchableOpacity } from "react-native";
import styleSheet from "../css/style.jsx";

function Welcome({navigation}){
    return(
        <View style={styleSheet.container}>
            <Text style={styleSheet.heading}>TheITStudio</Text>
            <Text style={styleSheet.subHeading}>User Connect</Text>
            <Text style={styleSheet.secondaryText}>Connect with TheITStudio with your feedback.</Text>
            <TouchableOpacity style={styleSheet.welcomeBtn} onPress={()=>navigation.navigate('Form')}>
                <Text style={styleSheet.secondaryText}></Text>
            </TouchableOpacity>
        </View>
    )
}

export default Welcome;