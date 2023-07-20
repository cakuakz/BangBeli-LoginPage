import React from 'react';
import { TextInputKeyPressEventData, View, Text, StyleSheet, Dimensions, Image, TextInput, Button, Pressable, NativeSyntheticEvent} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
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

export const LoginOtp = () => {
    const navigation = useNavigation();
    const firstInput = React.useRef();
    const secondInput = React.useRef();
    const thirdInput = React.useRef();
    const fourthInput = React.useRef();
    const [otp, setOtp] = React.useState({1: '', 2: '', 3: '', 4: ''});
    const [isFontLoaded, setIsFontLoaded] = React.useState(false);
    
    React.useEffect(() => {
        loadFonts().then(() => setIsFontLoaded(true));
      }, []);
   
      if (!isFontLoaded) {
        return null;
      }

    return (
        <View style={style.container}>
            <StatusBar animated={true} backgroundColor="#1F69FF" />
            <View style={tw`flex flex-row h-[48px] bg-[#1F69FF] gap-x-3 py-[12px] px-[16px] mt-[24px]`}>
                <Pressable onPress={() => {
                    navigation.navigate('LoginPage')
                }}>
                    <Image source={require('../assets/chevron-left.png')} />
                </Pressable>
                <Text style={[tw`text-white text-[16px] font-bold`, style.textSemiBold]}>Masukkan Kode OTP</Text>
            </View>
            <Image source={require('../assets/svg_login_otp.png')} style={style.otpImage} />
            <Text style={[tw`text-center text-[20px] leading-[26px] font-semibold`, style.textSemiBold]}>Kode OTP Sudah Dikirim!</Text>
            <Text style={[tw`mt-[16px] text-center text-[#757575] text-[14px] leading-[21px]`, style.textRegular]}>Silahkan cek WhatsApp kamu!{'\n'}Jika kode OTP belum terkirim, klik “Kirim Ulang” </Text>
            <View style={style.otpContainer}>
                <TextInput 
                    style={style.otpInput} 
                    keyboardType='number-pad' 
                    maxLength={1} 
                    ref={firstInput}
                    onChangeText={(text) =>{
                        setOtp({...otp, 1: text})
                        text && secondInput.current.focus();
                    }}>

                </TextInput>
                <TextInput 
                    style={style.otpInput} 
                    keyboardType='number-pad' 
                    maxLength={1} 
                    ref={secondInput}
                    onChangeText={(text) =>{
                        setOtp({...otp, 2: text})
                        text ? thirdInput.current.focus() : firstInput.current.focus()
                    }}>

                </TextInput>
                <TextInput 
                    style={style.otpInput} 
                    keyboardType='number-pad' 
                    maxLength={1} 
                    ref={thirdInput}
                    onChangeText={(text) =>{
                        setOtp({...otp, 3: text})
                        text ? fourthInput.current.focus() : secondInput.current.focus()
                    }}>

                </TextInput>
                <TextInput 
                    style={style.otpInput} 
                    keyboardType='number-pad' 
                    maxLength={1} 
                    ref={fourthInput}
                    onChangeText={(text) =>{
                        setOtp({...otp, 4: text})
                        !text && thirdInput.current.focus()
                    }}>

                </TextInput>
            </View>
            <Text style={[tw`text-center mt-[36px] text-[#616161] text-[14px]`, style.textRegular]}>Belum dapat kode? <Text style={tw`text-[#1F69FF]`}>(Tunggu 15s)</Text></Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    otpImage: {
        marginHorizontal: 92,
        marginTop: 40,
    },
    otpContainer: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 68,
        marginTop: 31,
        gap: 16
    },
    otpInput: {
        fontSize: 14,
        color: 'black',
        textAlign: "center",
        backgroundColor: '#E9F0FF',
        paddingVertical: 12,
        paddingEnd: 12,
        paddingStart: 16,
        borderRadius: 12
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

export default LoginOtp;