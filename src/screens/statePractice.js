
import { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';

export default function StatePractice() {
  const [Email, setEmail]= (useState)
   const [Password, setPassword]= (useState )
   const [Username, setUsername]=( useState)
  return (
    <View style={styles.container}>
      <Text>email</Text>
      <Text>Password</Text>
      <Text>Username</Text>

      <TextInput
       style={styles.input}
       placeholder="enter Email"
       onChangeText={setEmail}
       
       
       />
      <TextInput
       style={styles.input}
       placeholder="enter Password"
       onChangeText={setPassword}
       
       
       />
      <TextInput
       style={styles.input}
       placeholder="enter Username"
       onChangeText={setUsername}
        />
       <Button title="Login"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal:20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
