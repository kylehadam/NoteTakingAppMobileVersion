import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to My Notes App</Text>
      <Button
        title="Go to Add Note"
        onPress={() => navigation.navigate('AddNote')}
      />
    </View>
  );
}
