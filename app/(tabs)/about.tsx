import { StyleSheet, Text, Image, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
     <Image 
       style={{
        width:  200,
        height: 200
       }}
       source={require('@/assets/images/react-logo.png')}
       />
      <Text>Sobre nós</Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
});