import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, Alert, TextInput } from 'react-native';
import { useNotes } from '../context/NotesContext';
import styles from './NotesScreen.styles';

export default function NotesScreen() {
  const { notes, deleteNote, updateNote } = useNotes();
  const [editingId, setEditingId] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const handleDeleteNote = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this note?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => deleteNote(id), style: 'destructive' },
    ]);
  };

  const handleEditNote = (id, text) => {
    setEditingId(id);
    setUpdatedText(text);
  };

  const handleSaveEdit = () => {
    updateNote(editingId, updatedText);
    setEditingId(null);
    setUpdatedText('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.noteContainer}>
      {editingId === item.id ? (
        <View>
          <TextInput
            style={styles.editInput}
            value={updatedText}
            onChangeText={setUpdatedText}
          />
          <Button title="Save" onPress={handleSaveEdit} />
          <Button title="Cancel" onPress={() => setEditingId(null)} color="gray" />
        </View>
      ) : (
        <>
          <Text style={styles.noteText}>{item.text}</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={() => handleEditNote(item.id, item.text)} style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteNote(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Notes</Text>
      {notes.length === 0 ? (
        <Text style={styles.noNotesText}>No notes available</Text>
      ) : (
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
