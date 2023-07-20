import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Dimensions, Image, TextInput, Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/core'

const loadFonts = async () => {
    await Font.loadAsync({
      'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
      'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
      'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    });
  };


export const LoginPage = () => {

    const [isFontLoaded, setIsFontLoaded] = React.useState(false);
    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [starPhoneNumber, setStarPhoneNumber] = React.useState('');

    const handlePhoneNumberChange = (text) => {
        const numericText = text.replace(/[^0-9]/g, '');
        const maskedText = text.replace(/\d/g, '*');  
        setStarPhoneNumber(maskedText);   
        setPhoneNumber(numericText);
      };

    const onBlurPhoneNumberChange = () => {
        
    }

    React.useEffect(() => {
        loadFonts().then(() => setIsFontLoaded(true));
      }, []);
   
      if (!isFontLoaded) {
        return null;
      }

    return (
        <View style={style.container}>
            <ImageBackground source={require('../assets/bg_header_loginpage.png')} resizeMode="cover" style={style.imageBackground}>
                <View style={style.LoginHeader}>
                        <Image source={require('../assets/bangbeli_logo.png')} style={tw`ml-[16px] mt-[70px]`}/>
                        <Text style={[tw`pl-[16px] pr-[50px] leading-[24px] text-white text-[16px]`, style.textRegular]}>Mari bergabung dengan <Text style={tw`font-bold`}>13.000+</Text> Mitra Bangbeli yang tersebar di <Text style={tw`font-bold`}>11</Text> Provinsi Indonesia.</Text>
                </View>
                <View style={style.body}>
                    <Text style={{fontFamily: 'Inter-SemiBold', color: '#404040'}}>Masukkan No WhatsApp</Text>
                    <TextInput style={style.inputText} placeholder='Masukkan Nomor' keyboardType='number-pad' value={starPhoneNumber} onChangeText={handlePhoneNumberChange} onBlur={onBlurPhoneNumberChange}></TextInput>
                    <View style={tw`flex flex-row mt-[16px] items-center bg-[#F5F5F5] py-[20px] pl-[12px] gap-x-2.5 rounded-lg border-[1px] border-[#E0E0E0]`}>
                        <Image source={require('../assets/danger_circle.png')} style={tw``}></Image>
                        <Text style={[tw`text-[#404040] font-thin`, style.textRegular]}>Masukan nomor WhatsApp yang terdaftar dalam aplikasi Bangbeli</Text>
                    </View>
                    <Pressable onPress={() => {
                        navigation.navigate('InputPin');
                    }} style={tw`mt-[40px]`}>
                        <View style={style.buttonMasuk}>
                            <Text style={{fontFamily: 'Inter-SemiBold', color: 'white', textAlign: 'center'}}>Masuk</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => {
                        navigation.navigate('LoginOtp');
                    }} style={tw`mt-[12px]`}>
                        <View style={style.buttonDaftar}>
                            <Text style={{fontFamily: 'Inter-SemiBold', color: '#1F69FF', textAlign: 'center'}}>Daftar</Text>
                        </View>
                    </Pressable>
                </View>
            </ImageBackground>
            <StatusBar animated={true} backgroundColor="#1F69FF" />
            
        </View>
    );
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    LoginHeader: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        height: 420
    },
    inputText: {
        backgroundColor: '#E9F0FF',
        marginTop: 8,
        paddingTop: 12,
        paddingEnd: 12,
        paddingBottom: 12,
        paddingLeft: 16,
        borderRadius: 12,
        fontSize: 14,
        color: '#9E9E9E'

    },
    body: {
        flex: 1,
        marginHorizontal: 16
    },
    buttonDaftar: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        borderColor: '#1F69FF'
    },
    buttonMasuk: {
        backgroundColor: '#1F69FF',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        borderColor: '#1F69FF'
    },
    textSemiBold: {
        fontFamily: 'Inter-SemiBold',
    },
    textBold: {
        fontFamily: 'Inter-Bold'
    },
    textRegular: {
        fontFamily: 'Inter-Regular'
    }

})

export default LoginPage;