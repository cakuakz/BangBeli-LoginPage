import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

export const InputPin: React.FC = () => {
    const navigation = useNavigation();
    const [pin, setPin] = React.useState('');

    const handleNumberPress = (number: string) => {
        if (number === 'del') {
          setPin(pin.slice(0, -1));
        } else if (pin.length < 6) {
          setPin(pin + number);
        }
      };

    const [isFontLoaded, setIsFontLoaded] = React.useState(false);
    
    React.useEffect(() => {
        loadFonts().then(() => setIsFontLoaded(true));
    }, []);
     
    if (!isFontLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#1F69FF" />
            <Pressable style={tw`mb-[235px] py-[12px] px-[16px]`} onPress={() => {
                navigation.navigate('LoginPage');
            }}>
                <Image source={require('../assets/chevron-left.png')}></Image>
            </Pressable>
            <Text style={styles.title}>Masukkan PIN</Text>
            <View style={styles.pinContainer}>
                {Array.from({ length: 6 }, (_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.pinCircle,
                            {
                                opacity: pin.length > index ? 1 : 0
                            },
                        ]}
                    />
                ))}
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('1')}
                >
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('2')}
                >
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('3')}
                >
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('4')}
                >
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('5')}
                >
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('6')}
                >
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('7')}
                >
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('8')}
                >
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('9')}
                >
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('')}
                    disabled
                >
                    <Text style={styles.buttonText}></Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('0')}
                >
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleNumberPress('del')}
                >
                    <Image source={require('../assets/delete_icon.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#1F69FF'
    },
    title: {
      fontSize: 16,
      color: '#FFFFFF',
      textAlign: "center",
      bottom: 145,
      fontFamily: 'Inter-Regular'
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: "center",
    },
    button: {
      width: 92,
      height: 65,
      borderRadius: 40,
      backgroundColor: '#1F69FF',
      margin: 10,
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter-SemiBold'
    },
    buttonText: {
      fontSize: 36,
      color: '#FFFFFF',
      fontWeight: '700'
    },
    pinContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        bottom: 130,
        paddingTop: 31
    },
    pinCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 6
    },
  });

export default InputPin;