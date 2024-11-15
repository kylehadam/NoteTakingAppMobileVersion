import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import StackNavigator from './StackNavigator';
import AddNoteScreen from '../screens/AddNoteScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  // State to store notes
  const [notes, setNotes] = useState([]);

  // Function to add a note
  const addNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now().toString(), text: note }]);
  };

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }} 
      />
      <Tab.Screen 
        name="Notes" 
        options={{ title: 'Notes' }}
      >
        {() => <StackNavigator notes={notes} />}  {/* Pass notes to StackNavigator */}
      </Tab.Screen>
      <Tab.Screen 
        name="Add Note" 
        options={{ title: 'Add Note' }}
      >
        {() => <AddNoteScreen addNote={addNote} />}  {/* Pass addNote function */}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
