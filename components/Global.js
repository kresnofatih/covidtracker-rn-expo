import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { themeColors } from '../ThemeColors'
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';

const Global = () => {
    const getData = useRef(()=>{})
    let [fontsLoaded] = useFonts({
        'Raleway-Light' : require('../assets/fonts/Raleway/static/Raleway-Light.ttf'),
        'Raleway-Thin' : require('../assets/fonts/Raleway/static/Raleway-Thin.ttf'),
        'SourceSansPro' : require('../assets/fonts/SourceSansPro/SourceSansPro-Light.ttf')
    });
    const [globalData, setGlobalData] = useState([])
    getData.current = async()=>{
        const response = await fetch('https://api.covid19api.com/summary');
        const respjson = await response.json();
        console.log(respjson.Global);
        setGlobalData(respjson.Global);
    }
    useEffect(()=>{
        getData.current();
    }, [])
    return (
        <ScrollView>
        <View style={styles.globalContainer}>
            <Image
                style={styles.homeImage}
                source={require('../assets/icons8/danger.png')}
                resizeMode="contain"
            />
            <Text style={[
                styles.globalTitle,
                fontsLoaded && {fontFamily: 'Raleway-Light'}
            ]}>Worldwide</Text>
            {globalData &&
            <>
                <View style={[styles.globalinfobox, {borderColor: themeColors.lightPink}]}>
                    <Text style={[styles.globalinfoboxtext, 
                        fontsLoaded && {fontFamily: 'Raleway-Light'}]}>
                            <Text style={[
                                styles.globalinfoboxnumber,
                                fontsLoaded && {fontFamily: 'SourceSansPro'}
                            ]}>{globalData.TotalDeaths}</Text>{'\nTotal Deaths'}
                    </Text>
                </View>
                <View style={[styles.globalinfobox, {borderColor: themeColors.lightYellow}]}>
                    <Text style={[styles.globalinfoboxtext, 
                        fontsLoaded && {fontFamily: 'Raleway-Light'}]}>
                            <Text style={[
                                styles.globalinfoboxnumber,
                                fontsLoaded && {fontFamily: 'SourceSansPro'}
                            ]}>{globalData.TotalConfirmed}</Text>{'\nTotal Confirmed'}
                    </Text>
                </View>
                <View style={[styles.globalinfobox, {borderColor: themeColors.cyanBlue}]}>
                    <Text style={[styles.globalinfoboxtext, 
                        fontsLoaded && {fontFamily: 'Raleway-Light'}]}>
                            <Text style={[
                                styles.globalinfoboxnumber,
                                fontsLoaded && {fontFamily: 'SourceSansPro'}
                            ]}>{globalData.TotalRecovered}</Text>{'\nTotal Recovered'}
                    </Text>
                </View>
            </>
            }
            <Text style={[
                styles.globalTitle,
                fontsLoaded && {fontFamily: 'Raleway-Light'}
            ]}>Countries</Text>
            <>
                <TouchableOpacity style={[styles.globalinfobox, {borderColor: themeColors.lightPink}]} onPress={()=>console.log('hello')}>
                    <Text style={[styles.globalinfoboxtext, 
                        fontsLoaded && {fontFamily: 'Raleway-Light'}]}>
                            <Text style={[
                                styles.globalinfoboxnumber,
                                fontsLoaded && {fontFamily: 'SourceSansPro'}
                            ]}>Check Out</Text>{'\nJapan'}
                    </Text>
                        <AntDesign name="right" size={24} color="black" style={styles.nextBtn}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.globalinfobox, {borderColor: themeColors.lightYellow}]} onPress={()=>console.log('hello')}>
                    <Text style={[styles.globalinfoboxtext, 
                        fontsLoaded && {fontFamily: 'Raleway-Light'}]}>
                            <Text style={[
                                styles.globalinfoboxnumber,
                                fontsLoaded && {fontFamily: 'SourceSansPro'}
                            ]}>Check Out</Text>{'\nGermany'}
                    </Text>
                        <AntDesign name="right" size={24} color="black" style={styles.nextBtn}/>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.globalinfobox, {borderColor: themeColors.cyanBlue}]} onPress={()=>console.log('hello')}>
                    <Text style={[styles.globalinfoboxtext, 
                        fontsLoaded && {fontFamily: 'Raleway-Light'}]}>
                            <Text style={[
                                styles.globalinfoboxnumber,
                                fontsLoaded && {fontFamily: 'SourceSansPro'}
                            ]}>Check Out</Text>{'\nChina'}
                    </Text>
                        <AntDesign name="right" size={24} color="black" style={styles.nextBtn}/>
                </TouchableOpacity>
            </>
        </View>
        </ScrollView>
    )
}

export default Global

const styles = StyleSheet.create({
    globalContainer: {
        width: '100%',
        marginBottom: -600
    },
    globalTitle: {
        marginLeft: 25,
        fontSize: 24,
        marginBottom: 10
    },
    globalinfobox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 25,
        paddingBottom: 15,
        borderRadius: 15,
        borderWidth: 3,
        marginVertical: 10,
    },
    globalinfoboxtext: {
        fontSize: 20,
    },
    globalinfoboxnumber: {
        fontSize: 20,
        color: themeColors.darkBlue
    },
    homeImage: {
        width: Dimensions.get('window').width,
        maxHeight: 270
    },
    nextBtn: {
        position: 'absolute',
        right: 25,
        top: '50%',
        bottom: '50%',
    }
})
