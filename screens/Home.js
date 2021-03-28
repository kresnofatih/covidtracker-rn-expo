import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { themeColors } from '../ThemeColors'
import { useFonts } from 'expo-font';
import Header from '../components/Header';
import Global from '../components/Global';

const Home = () => {
    let [fontsLoaded] = useFonts({
        'Raleway-Light' : require('../assets/fonts/Raleway/static/Raleway-Light.ttf'),
        'Raleway-Thin' : require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
    });
    return (
        <View style={styles.homeContainer}>
            <Header/>
            <Global/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: themeColors.clearWhite,
    },
    homeImage: {
        width: Dimensions.get('window').width,
        maxHeight: 270
    },
})
