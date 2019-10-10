import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [someText, setSomeText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={styles.container}>
      <Text>{someText}</Text>
      <Button title="change Text" onPress={() => setSomeText('We just changed it using states')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
