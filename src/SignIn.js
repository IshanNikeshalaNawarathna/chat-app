import { SafeAreaView, StatusBar, StyleSheet, TextInput, View, Text, Button, Image } from "react-native";

export function SignIn() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />

            <View style={{backgroundColor:'#f4f4f9',width:'90%',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:20,}}>
                <Image source={require('../assets/chat.png')} style={styles.image} />

                <View style={styles.view}>
                    <Text style={styles.title}>Mobile</Text>
                    <TextInput style={styles.TextInput} placeholder="Mobile Number"/>
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.TextInput} secureTextEntry={true} placeholder="Password"/>
                </View>

                <View style={styles.view}>
                    <Button title="Sign In" />
                </View>
                <View style={styles.view1}>
                    <Button title="Creata New Acount" />
                </View>
            </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        view1:{
            width: '100%',
            paddingHorizontal: 30,
            paddingVertical: 5,
            marginBottom:15,
        },
        image: {
            width: 96,
            height: 96,
            objectFit: 'contain',
            marginBottom: 10,
            marginVertical:15,
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#012a4a',
        },
        view: {
            width: '100%',
            paddingHorizontal: 30,
            paddingVertical: 5,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        TextInput: {
            borderStyle: 'solid',
            width: '100%',
            borderWidth: 1,
            marginTop: 8,
            padding: 5,
            borderRadius: 5,
            fontSize: 20,

        },

    }
);