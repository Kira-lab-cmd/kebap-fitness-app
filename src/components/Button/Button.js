import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './Button.style'
const Button = ({ text, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button