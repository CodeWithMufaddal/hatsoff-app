import { Text, View, SafeAreaView, ImageBackground, Image } from 'react-native';
import React from 'react'
import { Stack, useRouter, Link } from 'expo-router';
import { COLORS, SIZES, icons, images } from '../constants';
import { ScreenHeaderBtn, Welcome } from '../components';
import styles from '../styles/index.style'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import Tabs from '../components/Tabs/Tabs';


const index = () => {
    return (
        <ImageBackground source={images.bgHome} style={styles.backgroundImage}>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['rgba(0,0,0,1)', 'transparent']} style={styles.linearGradient}>
                <SafeAreaView style={styles.safeAreaView}>
                    <Stack.Screen
                        options={{
                            headerLeft: () => (
                                <Image
                                    source={icons.logo}
                                    style={styles.logo}
                                    resizeMode="contain"
                                />
                            ),
                            headerRight: () => (
                                <View style={{ flexDirection: 'row', }}>
                                    <ScreenHeaderBtn iconUrl={icons.lightbulb} dimension="70%" />
                                    <ScreenHeaderBtn iconUrl={icons.bell} dimension="70%" />
                                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%" />
                                </View>
                            ),
                            headerTitle: ""
                        }}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 110 }}>
                        <Welcome

                        />
                        
                    </ScrollView>
                    <Tabs  />
                    {/* <Tabs>
                        <Tabs.Screen name='HOME'/>
                        <Tabs.Screen name='home'/>
                        <Tabs.Screen name='DAY OFF'/>
                        <Tabs.Screen name='WFH'/>
                        <Tabs.Screen name='LEAVE'/>
                    </Tabs> */}
                </SafeAreaView>
            </LinearGradient>
            <StatusBar style='light' />
        </ImageBackground>
    )
}

export default index;
