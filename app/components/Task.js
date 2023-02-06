import { StyleSheet, Text, View } from "react-native";
import { centered, FONTSTYLES } from "../assets/theme";

export default function Task() {
    return(
        <View style={[centered, styles.container]}>
            <Text style={FONTSTYLES.taskText}>This is a task</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E3E3E3',
        width: '80%',
        height: 60
    }
})