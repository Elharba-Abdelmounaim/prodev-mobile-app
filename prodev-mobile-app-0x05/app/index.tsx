import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Link } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Index() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        <ImageBackground 
          source={require("@/assets/images/hero-icon.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")}/>
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The base prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                
                <TouchableOpacity style={styles.button}>
                  <Link rel="stylesheet" href="/join">
                  <Text style={{ ...styles.textSmall, color: "black" }}>
                    Join
                  </Text>
                  </Link>
                </TouchableOpacity>
                

                <TouchableOpacity style={styles.transparentButton}>
                   <Link href="/Signin">
                  <Text style={styles.textSmall}>
                    Sing In
                  </Text>
                  </Link>
                </TouchableOpacity>
              </View>
               <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 20 }}>
                <Link rel="stylesheet" href="/(home)">
                  <View >
                    <Text style={{ color: "white"}}> Continue to home</Text>
                    <AntDesign name="arrowright" size={24} color="black" />
                  </View>
                </Link>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

 background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },

  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },

  textGroup: {
    alignItems: "center",
  },

  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },

  textSmall: {
    color:"white",
    fontSize:18,
    fontWeight: "200",
    textAlign: "center",
  },

  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },

  button: {
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },

  buttonGroup:{
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },

});