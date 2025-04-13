import { Image, StyleSheet, Platform, View } from "react-native";
import ScreenCalculadora from "@/components/screen/Calculadora";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScreenCalculadora />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
