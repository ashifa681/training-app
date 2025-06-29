import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

export default function Login() {
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/cloud2.png')} 
      />
      <Text style={styles.loginText}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      <Pressable onPress={() => setShowReset(true)}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </Pressable>

      {showReset && (
        <View style={styles.resetContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email to reset"
            placeholderTextColor="#888"
            value={resetEmail}
            onChangeText={setResetEmail}
            keyboardType="email-address"
          />
          <Pressable
            style={styles.resetButton}
            onPress={() => {
              alert(`Password reset link sent to: ${resetEmail}`);
              setResetEmail('');
              setShowReset(false);
            }}
          >
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </Pressable>
        </View>
      )}

      {/* Sign Up button at bottom right corner */}
      <Pressable 
        style={styles.signUpButton} 
        onPress={() => alert('Sign Up pressed!')}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 35,
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgotText: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 20,
    color: '#007BFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  resetContainer: {
    width: '80%',
    alignItems: 'center',
  },
  resetButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signUpButton: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBlockStart:5,
  },
});
