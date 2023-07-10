import { StyleSheet } from "react-native";
import { COLORS, SIZES, images } from "../constants";

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
    },

    backgroundImage: {
        flex: 1,
        color: COLORS.lightWhite,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    safeAreaView: {
        backgroundColor: "rgba(0,0,0,0.8)",
        flex: 1,
    },
    headerStyle: {
        flex: 1,
        backgroundColor: "none",
    },
    logo: {
        width: 100,
        height: 100,
        // backgroundColor: COLORS.white,
        // borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
        marginRight: SIZES.xSmall
    },
   
});

export default styles;
