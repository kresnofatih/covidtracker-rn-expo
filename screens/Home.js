import React from 'react'
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native'
import { themeColors } from '../ThemeColors'
import Header from '../components/Header';
import Global from '../components/Global';
import { StatusBar } from 'expo-status-bar';


const Home = ({navigation}) => {
    const goBack = ()=>{
        navigation.goBack();
    }
    return (
        <View style={styles.homeContainer}>
            <StatusBar style="auto" />
            <Header goBack={goBack}/>
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
