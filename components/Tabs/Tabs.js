import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './Tabs.style'
import { icons, SIZES } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';


const Tabs = ({ searchTerm, setSearchTerm, handleClick }) => {

    const [activeJobType, setActiveJobType] = useState("HOME")
    const router = useRouter()

    const tabs = ["HOME", "DAY OFF", "WFH", "LEAVE"];
    return (
        <View style={styles.tabsContainer}>
            <FlatList
                data={tabs}
                renderItem={({ item }) => (
                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={activeJobType == item ? ['red', 'orange']: ['transparent','transparent']} style={styles.linearGradient(activeJobType, item)}>
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                )}
                keyExtractor={(item) => item}
                contentContainerStyle={{ columnGap: SIZES.small }}
                horizontal
            />
        </View>
    )
}

export default Tabs