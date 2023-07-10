import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({

  container: {
    width: "100%",
  },
  tabsContainer: {
    display: "flex",
    alignItems: 'center',
    width: "100%",
    marginBottom: SIZES.xxxLarge,
  },
  linearGradient: (activeJobType, item) => ({

    borderRadius: SIZES.large,
    // backgroundColor: activeJobType == item ? "none" : "transparent",
  }),
  tab: (activeJobType, item) => ({
    paddingVertical: 7,
    paddingHorizontal: 14,

    borderRadius: SIZES.large,
    borderWidth: 1,
    // borderColor: activeJobType === item ? COLORS.tertiary : COLORS.lightWhite,
    borderColor: COLORS.lightWhite,
    // backgroundColor: activeJobType !== item ? 'transparent' : null
    // backgroundColor: activeJobType == item && "blue"
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: COLORS.lightWhite,
  }),
});

export default styles;
