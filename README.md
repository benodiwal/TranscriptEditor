# Transcript Editor

A web-based Transcript Editor built with React and TailwindCSS. This tool allows users to seamlessly edit and manage transcripts while synchronizing with audio playback.

## Features
- **Real-Time Playback**: Start audio playback and watch the words in the transcript highlight in sync with the audio.
- **Interactive Word Editing**: Click on any word in the transcript to open an editing dialog and make corrections.
- **Single Word Correction**: Apply changes to a single instance of a word using the "Correct" button.
- **Bulk Word Correction**: Apply changes to every instance of a selected word throughout the entire transcript with the "Correct All" button.

## Installation
To get started with the Transcript Editor, follow these steps:

1. Clone the Repository:
```bash
git clone https://github.com/benodiwal/TranscriptEditor.git
cd TranscriptEditor
```

2. Install Dependencies:
Make sure you have Node.js installed. Then, run:
```bash
yarn
```

3. Start the Development Server:
```bash
yarn dev
```

## How to Use
- **Start Playback**: Click the play button to begin audio playback. The transcript will highlight words in real-time as the audio plays.

- **Edit Words**: To edit a word, simply click on it in the transcript. This will open an editing dialog where you can make changes.

- **Apply Changes**: Use the "Correct" button in the editing dialog to apply your changes to a single instance of the word.

- **Correct All**: To apply the changes to every instance of the selected word throughout the entire transcript, use the "Correct All" button.

## Customization
The editor is built using React and styled with TailwindCSS. You can easily customize the appearance by editing the TailwindCSS classes in the component files.

### For more advanced customizations:

- Modify the React components in the src/components directory.
- Adjust the TailwindCSS configuration in the tailwind.config.js file.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
