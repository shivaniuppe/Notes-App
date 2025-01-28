import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNoteHandler = () => {
    if (note.trim().length > 0) {
      setNotes((prevNotes) => [note, ...prevNotes]);
      setNote('');
    }
  };

  const deleteNoteHandler = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Notes</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your note here..."
          value={note}
          onChangeText={(text) => setNote(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNoteHandler}>
          <Text style={styles.addButtonText}>ADD NOTE</Text>
        </TouchableOpacity>
        <ScrollView style={styles.notesContainer}>
          {notes.length > 0 ? (
            notes.map((item, index) => (
              <View key={index} style={styles.noteWrapper}>
                <Text style={styles.noteText}>{item}</Text>
                <TouchableOpacity onPress={() => deleteNoteHandler(index)}>
                  <Icon name="delete" size={24} color="#000000" />
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.placeholder}>Your notes will appear here...</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333333',
  },
  input: {
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#4285f4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  notesContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 12,
  },
  noteWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  noteText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  placeholder: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
    marginTop: 16,
  },
});
