import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

export function Chat() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
 {
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    }
 }
);