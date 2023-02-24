import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Update(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update User</Text>
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
    }
}