import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default function Home( {navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Create')}
            >
                <Text style={styles.text}>CREATE USER</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Read')}
            >
                <Text style={styles.text}>READ ONE USER</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button} 
                onPress={() => navigation.navigate('ReadAll')}
            >
                <Text style={styles.text}>READ ALL USERS</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Update')}
            >
                <Text style={styles.text}>UPDATE USER</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Delete')}
            >
                <Text style={styles.text}>DELETE USER</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#333'
    }, 
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 24
    }, 
    button: {
        backgroundColor: '#06BCEE',
        padding: 20,
        marginTop: 20,
        borderRadius: 10
    }, 
    text: {
        textAlign: 'center', 
        fontSize: 16,
        color: '#fff'
    }
}