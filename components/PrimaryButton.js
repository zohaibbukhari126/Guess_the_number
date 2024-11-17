import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PrimaryButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c04848', // Matches the lighter gradient color
    paddingVertical: 15, // Increased for better height
    paddingHorizontal: 50, // Wider on x-axis
    borderRadius: 30, // Rounded corners for modern look
    shadowColor: '#480048', // Shadow matches darker gradient color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600', // Bold text for emphasis
    textAlign: 'center',
  },
});
