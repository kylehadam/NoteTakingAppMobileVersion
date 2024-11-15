import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="screens/HomeScreen" options={{ title: 'Home Screen' }} />
      <Stack.Screen name="screens/NoteScreen" options={{ title: 'Note Details' }} />
      <Stack.Screen name="screens/AddNoteScreen" options={{ title: 'Add Note' }} />
    </Stack>
  );
}
