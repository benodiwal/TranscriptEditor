import TranscriptEditor from "./components/Editor"
import { initialTranscript } from "./data"

const App = () => {
  return (
    <div>
      <TranscriptEditor initialTranscript={initialTranscript}/>
    </div>
  )
}

export default App
