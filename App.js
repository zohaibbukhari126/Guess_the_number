import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <LinearGradient
      colors={['#c04848', '#480048']} // Light gradient for minimalism
      style={styles.container}
    >
      <ImageBackground
        source={require('./assets/numbers.jpg')}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.background}
      >
        <StatusBar style="dark" />
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    opacity: 0.1,
    position: 'absolute',
    width: 'auto', 
    height: 'auto',
  },
});
