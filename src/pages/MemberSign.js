import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

const MemberSign = ({ navigation }) => {

    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [userHomeTown, setUserHomeTown] = useState(null)

    function handleSubmit() {

        if (!userName || !userSurname || !userMail || !userHomeTown || !userAge) {
            Alert.alert("Kebap Fitness Salonu", "Bilgiler Boş Bırakılamaz")
            return
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHomeTown,
        }
        navigation.navigate("MemberResultScreen", { user })
    }

    return (
        <View>
            <Text style={{ marginTop: 30, fontSize: 50, color: "#1976d2" }}>MemberSign</Text>
            <Input label="Üye Adı" placeholder="Üyenin ismini giriniz" onChangeText={setUserName} />
            <Input label="Üye Soyadı" placeholder="Üyenin Soyismini giriniz" onChangeText={setUserSurname} />
            <Input label="Üye Yaşı" placeholder="Üyenin yaşını giriniz" onChangeText={setUserAge} />
            <Input label="Üye e-posta" placeholder="Üyenin e-posta adresini giriniz" onChangeText={setUserMail} />
            <Input label="Üye memleket" placeholder="Üyenin memleketini giriniz" onChangeText={setUserHomeTown} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />

        </View>
    )
}

export default MemberSign