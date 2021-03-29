import React from 'react'
import { StyleSheet, Text, Image, View, Dimensions, Pressable } from 'react-native'
import { themeColors } from '../ThemeColors'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


const Splash = ({navigation}) => {
    const goToHome = () =>{
        navigation.navigate('Home');
    }
    let [fontsLoaded] = useFonts({
        'Raleway-Light' : require('../assets/fonts/Raleway/static/Raleway-Light.ttf'),
        'Raleway-Thin' : require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
    });
    return (
        <View style={styles.splashContainer}>
            <StatusBar style="auto" />
            <Image
                style={styles.splashImage}
                source={require('../assets/icons8/pandemic.png')}
                resizeMode="contain"
            />
            <Text style={[styles.splashTitle, fontsLoaded && {fontFamily: 'Raleway-Light'}]}>CovidTraqqer</Text>
            <Text style={[
                styles.splashSubtitle, 
                fontsLoaded && {fontFamily: 'Raleway-Thin'}
            ]}>Find Out About Covid-19!</Text>
            <Pressable style={styles.splashnext} onPress={goToHome}>
                <AntDesign name="rightcircle" size={40} color={themeColors.lightPink} />
            </Pressable>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themeColors.clearWhite,
    },
    splashImage: {
        width: Dimensions.get('window').width,
        maxHeight: 275
    },
    splashTitle: {
        fontSize: 35,
        color: themeColors.darkSky,
    },
    splashSubtitle: {
        marginTop: 5,
        fontSize: 24,
        color: themeColors.lightPink
    },
    splashnext: {
        position: 'absolute',
        bottom: 30,
        display: 'flex',
        alignItems: 'center',
    }
})
