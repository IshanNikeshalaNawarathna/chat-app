import { SafeAreaView, StatusBar, StyleSheet, TextInput, View, Text, Button, Image } from "react-native";
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

export function SignUp() {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={{ backgroundColor: '#f4f4f9', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20, }}>
                <View style={styles.view}>
                    <Text style={styles.title}>First Name</Text>
                    <TextInput style={styles.TextInput} />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Last Name</Text>
                    <TextInput style={styles.TextInput} />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Mobile</Text>
                    <TextInput style={styles.TextInput} />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Password</Text>
                    <TextInput style={styles.TextInput} secureTextEntry={true} />
                </View>
                <View style={styles.view}>
                    <Text style={styles.title}>Country</Text>
                    <SelectDropdown data={countries} buttonStyle={styles.dropdown1BtnStyle} rowStyle={styles.dropdown4RowStyle} />
                </View>
                <View style={styles.view}>
                    <Button title="Sign Up" />
                </View>
                <View style={styles.view1}>
                    {/* <Button title="Are you New User? Sign Up" /> */}
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        view1: {
            width: '100%',
            paddingHorizontal: 30,
            paddingVertical: 5,
            marginBottom:15,
        },

        dropdown4RowStyle: {
            backgroundColor: '#EFEFEF',
            borderBottomColor: '#C5C5C5'
        },
        dropdown1BtnStyle: {
            width: '100%',
            height: 50,
            backgroundColor: '#FFF',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#444',
            marginTop: 8,
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