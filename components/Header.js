import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,  // Larger font size for visibility
    color: '#ffffff',  // White text color for contrast
    fontWeight: 'bold',  // Bold text for emphasis
  },
});
