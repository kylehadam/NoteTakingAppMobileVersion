import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NoteScreen from '../screens/NoteScreen';
import AddNoteScreen from '../screens/AddNoteScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Note" component={NoteScreen} options={{ title: 'Note Details' }} />
      <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Add Note' }} />
    </Stack.Navigator>
  );
}
