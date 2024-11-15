# Note-Taking App (Mobile)

A mobile-friendly note-taking application built with **React Native** and **Expo**. The app allows users to add, edit, and delete notes seamlessly, with a clean and intuitive UI.

---

## Features

- 📋 **Add Notes**: Users can create and log their notes with ease.
- ✏️ **Edit Notes**: Update any existing note.
- 🗑️ **Delete Notes**: Delete notes with confirmation prompts.
- 🛠️ **Responsive Design**: Optimized for mobile with custom styling.
- 🌈 **Tabs Navigation**: Quickly switch between "Home", "Add Note", and "Notes".

---

## Technologies Used

- **React Native**: For building the mobile app.
- **Expo**: For development and deployment.
- **React Navigation**: For managing navigation between screens.
- **Context API**: For managing global note state.
- **JavaScript**: Core programming language.
- **Styled with CSS-in-JS**: Custom styling using `StyleSheet`.

---

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd NoteTakingAppMobileVersion
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npx expo start
   ```

4. **Run on a Device or Emulator**
   - Scan the QR code with Expo Go (iOS/Android).
   - Use emulator commands:
     ```bash
     npx expo start --ios
     npx expo start --android
     ```

---

## File Structure

```plaintext
.
├── App.js                   # Entry point of the app
├── index.js                 # App registration
├── context/
│   ├── NotesContext.js      # Handles global note state management
├── navigation/
│   ├── MainTabNavigator.js  # Tab navigation
│   ├── StackNavigator.js    # Stack navigation for "Notes" screen
├── screens/
│   ├── HomeScreen.js        # Home screen
│   ├── AddNoteScreen.js     # Add note screen
│   ├── NotesScreen.js       # Notes screen
├── styles/
│   ├── AddNoteScreen.styles.js # Styling for AddNoteScreen
│   ├── NotesScreen.styles.js   # Styling for NotesScreen
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

---

## How to Use

1. **Adding Notes**
   - Navigate to the "Add Note" tab.
   - Enter your note in the input field and press **"Click to Log Note"**.
   - The note will appear in the "Notes" tab.

2. **Viewing Notes**
   - Navigate to the "Notes" tab.
   - View all your logged notes.

3. **Editing Notes**
   - In the "Notes" tab, press the **Edit** button next to a note.
   - Modify the note and press **Save**.

4. **Deleting Notes**
   - In the "Notes" tab, press the **Delete** button next to a note.
   - Confirm deletion in the popup dialog.

---

## Future Enhancements

- 🔐 **User Authentication**: Add user login to secure notes.
- ☁️ **Cloud Sync**: Integrate with a backend to persist notes.
- 🔔 **Reminders**: Allow users to set reminders for their notes.
- 🎨 **Themes**: Enable light and dark mode.

---

## Troubleshooting

If you encounter issues:
1. Make sure Expo CLI is installed:
   ```bash
   npm install -g expo-cli
   ```
2. Clear caches:
   ```bash
   expo start -c
   ```
3. Update dependencies:
   ```bash
   npm outdated
   npm update
   ```

---

## License

This project is licensed under the MIT License. Feel free to use and modify as needed!
