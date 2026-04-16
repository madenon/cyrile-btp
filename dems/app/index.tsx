import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "./styles/global";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={{ color: "white" }}>Macrozone</Text>
      <Text style={styles.date}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  date: {
    fontSize: 14,
  },
});
