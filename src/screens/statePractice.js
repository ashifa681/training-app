import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

export default function StatePractice({ navigation }) {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/cloud.png')} />

      <Text style={styles.helloText}>Hello!</Text>
      <Text style={styles.subText}>Welcome to the cloud resources</Text>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.customButton,
            selectedButton === 'login' && styles.buttonPressed,
          ]}
          onPress={() => {
            setSelectedButton('login');
            navigation.navigate('LoginScreen'); 
          }}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === 'login' && styles.buttonTextPressed,
            ]}
          >
            Login
          </Text>
        </Pressable>

        <View style={{ height: 20 }} />

        <Pressable
  style={[
    styles.customButton,
    selectedButton === 'signin' && styles.buttonPressed,
  ]}
  onPress={() => {
    setSelectedButton('signin');
    alert('Sign In Pressed');
  }}
>
  <Text
    style={[
      styles.buttonText,
      selectedButton === 'signin' && styles.buttonTextPressed,
    ]}
  >
    Sign In
  </Text>
</Pressable>

      </View>

      <Text style={styles.signUpText}>Sign up using</Text>

      <View style={styles.iconRow}>
        <Image
          source={require('../../assets/linkedin.png')}
          style={styles.iconImage}
        />
        <Image
          source={require('../../assets/image.png')}
          style={styles.iconImage}
        />
        <Image
          source={require('../../assets/chrome.png')}
          style={styles.iconImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 90,
  },
  helloText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: 250,
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: 'white',
    borderColor: '#71717A',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  buttonPressed: {
    backgroundColor: '#71717A',
  },
  buttonText: {
    color: '#71717A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextPressed: {
    color: 'white',
  },
  signUpText: {
    fontSize: 14,
    color: '#555',
    marginTop: 40,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
});
