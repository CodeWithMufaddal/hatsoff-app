import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xMedium,
    color: COLORS.lightWhite,
    marginHorizontal: SIZES.large,

  },
  // welcomeMessage: {
  //   fontFamily: FONT.bold,
  //   fontSize: SIZES.xLarge,
  //   color: COLORS.lightWhite,
  //   marginTop: 2,
  // },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium
  },
  hrLine: {
    borderBottomColor: "#A88B61",
    borderBottomWidth: 1,
    marginHorizontal: SIZES.medium,
    marginVertical: SIZES.medium,

  },
  tabBox: {
    marginLeft: SIZES.large,
  },
  tab: (activeJobType, color) => ({
    paddingVertical: 4,
    display: "flex",
    alignItems: "center",
    width: 90,
    borderRadius: 100,
    backgroundColor: color,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    fontSize: 13,
    color: COLORS.lightWhite,
  }),

  scanTabText: {
    fontFamily: FONT.medium,
    fontSize: 15,
    color: COLORS.lightWhite,
  },
  tabDeskText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    fontSize: 12,
    color: COLORS.lightWhite,
  }),

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    fontSize: 13
  },

  Button: {
    small: {
      color: COLORS.lightWhite,
      fontFamily: FONT.regular,
      display: "flex",
      borderWidth: 1,
      borderColor: COLORS.lightWhite,
      borderRadius: SIZES.xxxLarge,
      paddingVertical: SIZES.small / 2,
      paddingHorizontal: SIZES.small,
      fontSize: 12,
    },
    medium: {
      color: COLORS.lightWhite,
      fontFamily: FONT.medium,
      borderWidth: 1,
      borderColor: COLORS.lightWhite,
      borderRadius: SIZES.xxxLarge,
      paddingVertical: SIZES.medium / 3,
      paddingHorizontal: SIZES.medium / 2,
      fontSize: 13,
    },
    large: {
      color: COLORS.lightWhite,
      fontFamily: FONT.medium,
      borderWidth: 1,
      borderColor: COLORS.lightWhite,
      borderRadius: SIZES.xxxLarge,
      paddingVertical: SIZES.large / 3,
      paddingHorizontal: SIZES.large / 2,
      fontSize: 14,
    },
  },

  scanButton:{
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 4,
  },

  scanTab: {
    paddingVertical: 2.5,
  },

  scanReportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: SIZES.large,
    marginTop: SIZES.xxxSmall,
  },
  scanInTime: {
    alignItems: "center",
    marginVertical: SIZES.xxxSmall,
    width: "30%",
    // width: 150,
  },

  scanReportText: {
    color: COLORS.lightWhite,
    fontFamily: FONT.medium,
    fontSize: 12
  },

  scanReportButton: {
    width: "100%",
    marginVertical: 7,
  },

  

  // Notifications
  notificationContainer: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    display: "flex",
    overflow: "hidden",
    whiteSpace: "nowrap",
    paddingVertical: SIZES.xxxSmall,
    paddingHorizontal: SIZES.xSmall,
    marginHorizontal: SIZES.large,
    marginVertical: SIZES.small
  },

  notificationText: {
    alignItems: "flex-start",
    color: COLORS.lightWhite,
    fontFamily: FONT.regular,
    paddingBottom: SIZES.small
  },

  notificationDateTime: {
    color: "rgba(255,255,255,0.2)",
    fontFamily: FONT.bold,
    fontSize: 12
  },

  notificationBottomContainer: {
    color: "darkgrey",
    fontFamily: FONT.regular,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    fontSize: 13,
    marginBottom: 4
  },

  transparent: {
    button: {
      // background-color: rgba(255, 255, 255, .15);  
      // backdrop-filter: blur(5px);
      small: {
        backgroundColor: "rgba(255, 255, 255, .15)",
        backdropFilter: "blur(5px)",
        borderRadius: SIZES.xxxLarge,
        paddingVertical: SIZES.small,
        alignItems: "center",
      }
    },
    container: {
      backgroundColor: "rgba(255, 255, 255, .2)",
      backdropFilter: "blur(5px)",
      borderRadius: 4,
    }
  }

});

export default styles;
