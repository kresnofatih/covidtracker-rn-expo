import React from 'react'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { themeColors } from '../ThemeColors'
import { useFonts } from 'expo-font';
import Constants from 'expo-constants'

const Header = ({goBack}) => {
    let [fontsLoaded] = useFonts({
        'Raleway-Light' : require('../assets/fonts/Raleway/static/Raleway-Light.ttf'),
        'Raleway-Thin' : require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
        'Raleway-Medium' : require('../assets/fonts/Raleway/static/Raleway-Medium.ttf'),
    });
    return (
        <View style={styles.headerContainer}>
            <Pressable style={[styles.headerSidetitleContainer, {alignItems: 'flex-start'}]} onPress={goBack}>
                <Text style={[
                    styles.headerTitle, 
                    fontsLoaded && {fontFamily: 'Raleway-Light',
                    marginLeft: 25, fontSize: 20, color: themeColors.clearWhite}
                ]}>Back</Text>
            </Pressable>
            <View style={styles.headerTitleContainer}>
                <Text style={[
                    styles.headerTitle,
                    fontsLoaded && {fontFamily: 'Raleway-Medium'}
                ]}>Home</Text>
            </View>
            <Pressable style={[styles.headerSidetitleContainer, {alignItems: 'flex-end'}]}>
                <Text style={[
                    styles.headerTitle,
                    fontsLoaded && {fontFamily: 'Raleway-Light',
                    marginRight: 25, fontSize: 20, color: themeColors.clearWhite}
                ]}>About</Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight+5,
        backgroundColor: themeColors.cyanBlue,
        paddingBottom: 15,
        borderBottomLeftRadius: Constants.statusBarHeight,
        borderBottomRightRadius: Constants.statusBarHeight,
    },
    headerTitleContainer: {
        alignItems: 'center',
        flex: 0.4
    },
    headerSidetitleContainer: {
        // backgroundColor: themeColors.lightPink,
        color: themeColors.darkBlue,
        flex: 0.3
    },
    headerTitle: {
        fontSize: 24,
        color: themeColors.darkBlue
    },
})
