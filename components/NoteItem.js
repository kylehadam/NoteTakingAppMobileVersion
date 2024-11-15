
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoteItem = ({ note, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.preview}>{note.content.slice(0, 50)}...</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  preview: { fontSize: 14, color: '#555' },
});

export default NoteItem;
