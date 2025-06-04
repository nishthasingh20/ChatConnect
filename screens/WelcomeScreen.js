import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  const handleSignIn = () => {
    // Navigate to sign in screen
    // navigation.navigate('SignIn');
    console.log('Navigate to Sign In');
  };

  const handleRegister = () => {
    // Navigate to register screen
    // navigation.navigate('Register');
    console.log('Navigate to Register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5E6D3" />
      
      {/* Grid Background */}
      <View style={styles.gridOverlay} />
      
      <View style={styles.content}>        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Image 
            source={require('./assets/logo-image.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.appTitle}>CHAT CONNECT</Text>
          <Text style={styles.tagline}>TALK. SHARE. CONNECT.</Text>
        </View>

        {/* Welcome Text */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
          <Text style={styles.welcomeSubtitle}>
            Connect with employers and vendors through seamless conversations
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonSection}>
          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={handleRegister}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton} 
            onPress={handleSignIn}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D3',
  },
  gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.1,
    backgroundColor: 'transparent',
    // Add grid pattern using border if needed
  },  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-evenly', // Changed from space-between for better distribution
    paddingTop: height * 0.05, // Reduced top padding
    paddingBottom: height * 0.04,
  },
  logoSection: {
    alignItems: 'center',
    marginTop: -50, // Reduced top margin
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 7,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8B4513',
    letterSpacing: 2,
    marginTop: 20,
  },
  tagline: {
    fontSize: 14,
    color: '#8B4513',
    letterSpacing: 1.5,
    marginTop: 8,
    opacity: 0.8,
  },  welcomeSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: -height * 0.02, // Added negative margin to reduce space from logo section
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#8B4513',
    textAlign: 'center',
    lineHeight: 25,
    opacity: 0.8,
  },
  buttonSection: {
    paddingBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 16,
    shadowColor: '#8B4513',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#F5E6D3',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#8B4513',
  },
  secondaryButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default WelcomeScreen;