import {
  Text,
  View,
  StatusBar
} from "react-native";
import {styles} from "../../styles/auth.styles"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black"></StatusBar>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/notification"}>Visit notification</Link>
    </View>
  );
}
