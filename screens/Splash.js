import React from 'react'
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native'
import { themeColors } from '../ThemeColors'
import { useFonts } from 'expo-font';


const Splash = () => {
    let [fontsLoaded] = useFonts({
        'Raleway-Light' : require('../assets/fonts/Raleway/static/Raleway-Light.ttf'),
        'Raleway-Thin' : require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
    });
    return (
        <View style={styles.splashContainer}>
            <Image
                style={styles.splashImage}
                source={require('../assets/icons8/splashimg.png')}
                resizeMode="contain"
            />
            <Text style={[styles.splashTitle, fontsLoaded && {fontFamily: 'Raleway-Light'}]}>CovidTraqqer</Text>
            <Text style={[
                styles.splashSubtitle, 
                fontsLoaded && {fontFamily: 'Raleway-Thin'}
            ]}>Find Out About Covid-19!</Text>
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
        backgroundColor: themeColors.lightYellow,
    },
    splashImage: {
        width: Dimensions.get('window').width-50,
        maxHeight: 375
    },
    splashTitle: {
        fontSize: 35,
        color: themeColors.darkSky,
    },
    splashSubtitle: {
        marginTop: 5,
        fontSize: 24,
        color: themeColors.darkSky
    }
})
