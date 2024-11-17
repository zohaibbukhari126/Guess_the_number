import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Enter Your Number</Text>
        <TextInput 
          style={styles.input} 
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#6b7280" // Neutral placeholder
          selectionColor="transparent" 
          maxLength={2} 
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,

  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#ffffff', // Clean white card background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    color: '#374151', // Neutral dark text
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 60, // Slightly wider input field
    borderBottomColor: '#3b82f6', // Eye-catching blue
    borderBottomWidth: 2,
    marginBottom: 20,
    fontSize: 18,
    color: '#111827', // Text color is dark
    textAlign: 'center',
    outlineStyle: 'none',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});
