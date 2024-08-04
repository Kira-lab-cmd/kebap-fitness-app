import { View, Text, StyleSheet, ImageBackground, rgba, blur } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';

const MemberResult = ({ route }) => {

    const { user } = route.params

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/564x/b2/bc/e7/b2bce749f9ffc21ed0354e12d33f9578.jpg' }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.message} >Kayıt Tamamlandı!</Text>
                <Text style={styles.label} >User Name: {user.userName}</Text>
                <Text style={styles.label} >User Surname: {user.userSurname} </Text>
                <Text style={styles.label} >User Age: {user.userAge} </Text>
                <Text style={styles.label} >User HomeTown: {user.userHomeTown} </Text>
                <Text style={styles.label} >User Mail: {user.userMail} </Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        margin: "auto",
        borderRadius: 30,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: "90%",
        height: "40%"


    },
    label: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: '#333'
    },
    message: {
        marginTop: 15,
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 10,
        color: '#333'
    }
})

export default MemberResult