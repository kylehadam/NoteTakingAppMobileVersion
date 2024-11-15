import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screens/HomeScreen';
import NoteScreen from './app/screens/NoteScreen';
import AddNoteScreen from './app/screens/AddNoteScreen';
import { Ionicons } from '@expo/vector-icons';
import { NotesProvider } from './app/context/NotesContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NotesProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Notes') {
                iconName = focused ? 'document-text' : 'document-text-outline';
              } else if (route.name === 'AddNote') {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Notes" component={NoteScreen} />
          <Tab.Screen name="AddNote" component={AddNoteScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}
