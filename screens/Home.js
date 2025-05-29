import { View, Text, Image } from "react-native";
import styles from "../styles";

export default function Home () {

    return (
        <View style={styles.container}>
            <Text>Bem vindo ao App do 6INFO!</Text>
            <Image source={require('../assets/favicon.png')} style={styles.imagemLogo} />
        </View>
    )

}