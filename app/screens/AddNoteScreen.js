import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNotes } from '../context/NotesContext';
import styles from './AddNoteScreen.styles';

export default function AddNoteScreen({ navigation }) {
  const { addNote } = useNotes();
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim().length > 0) {
      addNote({ text: noteText, id: Date.now().toString() });
      setNoteText(''); // Clear the input
      navigation.navigate('Notes'); // Navigate to the "Notes" tab
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Add a Note</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your note here"
          value={noteText}
          onChangeText={setNoteText}
          multiline
        />
        <View style={styles.buttonContainer}>
          <Button title="Click to Log Note" onPress={handleAddNote} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
