import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { COLORS, icons, SIZES } from '../../../constants';
import { LinearGradient } from 'expo-linear-gradient';


const welcome = ({ handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Exp")
  const router = useRouter()
  const userInfo = [
    {
      title: "avg time",
      val: "9hr 11m",
      desc: "Avg. Time",
      color: "#E26464",
    },
    {
      title: "years",
      val: "0.8Yrs",
      desc: "Exp",
      color: "#BC8933",
    },
    {
      title: "emergency leave",
      val: "2",
      desc: "EL",
      color: "#408E40",
    },
    {
      title: "planned leave",
      val: "10",
      desc: "PL",
      color: "#408E40",
    }];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome Mufaddal</Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={userInfo}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item.color)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item.val}</Text>
              <Text style={styles.tabDeskText(activeJobType, item)}>{item.desc}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          style={styles.tabBox}
        />
      </View>

      {/* HR */}
      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.scanTabText}>Today Scan Report</Text>
          <TouchableOpacity>
            <Text style={styles.Button.small}>View More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scanReportContainer}>
          <View style={styles.scanInTime}>
            <Text style={styles.scanReportText}>In Time</Text>
            <View style={[styles.transparent.button.small, styles.scanReportButton]}>
              <Text style={styles.tabDeskText()}>10:56 AM</Text>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <Text style={styles.scanReportText}>Out Time</Text>
            <View style={[styles.transparent.button.small, styles.scanReportButton]}>
              <Text style={styles.tabDeskText()}>10:56 AM</Text>
            </View>
          </View>
          <View style={styles.scanInTime}>
            <Text style={styles.scanReportText}>Duration</Text>
            <View style={[styles.transparent.button.small, styles.scanReportButton]}>
              <Text style={styles.tabDeskText()}>10:56 AM</Text>
            </View>
          </View>
        </View>

        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} locations={[0, 1]} colors={['red', 'orange']} style={[styles.scanButton, styles.Button.small]}>
          <TouchableOpacity style={styles.scanTab} >
            <Text style={styles.tabText()}>Scan Now</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>

      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.scanTabText}>Latest Notification</Text>
          <TouchableOpacity>
            <Text style={styles.Button.small}>View More</Text>
          </TouchableOpacity>
        </View>


        <View style={[styles.transparent.container, styles.notificationContainer]}>
          <View >
            <Text style={styles.notificationText}>{/* \nWe will be working from home on June 14 due to palkhi.\nDo not forget to send email while logging in and out. */}Greetings to all.</Text>
            <Text style={styles.notificationText} numberOfLines={1}>We will be working from home on June 14 due to palkhi.\nDo not forget to send email while logging in and out. </Text>
          </View>

          <View style={styles.notificationBottomContainer}>
            <TouchableOpacity>
              <Text style={styles.Button.small}>View More</Text>
            </TouchableOpacity>
            <Text style={styles.notificationDateTime}>13 Jun 2023 | 01:11 PM</Text>
          </View>
        </View>
      </View>

      <View style={styles.hrLine} />

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.scanTabText}>Checkout Our Latest Insta Posts</Text>
          <TouchableOpacity>
            <Text style={styles.Button.small}>View More</Text>
          </TouchableOpacity>
        </View>
      </View>



    </View>
  )
}

export default welcome