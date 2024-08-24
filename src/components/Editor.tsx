import { useState, useEffect, useRef, Fragment } from "react";
import { TranscriptWord } from "../types";
import { Pause, Play, Rewind } from "lucide-react";

type TranscriptEditorProps = {
  initialTranscript: TranscriptWord[];
}

const TranscriptEditor: React.FC<TranscriptEditorProps> = ({ initialTranscript }) => {
  const [transcript, setTranscript] = useState<TranscriptWord[]>(initialTranscript);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const transcriptEndTime = transcript.length > 0 
    ? transcript[transcript.length - 1].start_time + transcript[transcript.length - 1].duration 
    : 0;

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime((prevTime) => {
          const newTime = prevTime + 100;
          if (newTime >= transcriptEndTime) {
            setIsPlaying(false);
            return transcriptEndTime;
          }
          return newTime;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, transcriptEndTime]);

  useEffect(() => {
    if (editingIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingIndex]);

  const togglePlayback = (): void => {
    if (currentTime >= transcriptEndTime) {
      setCurrentTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleRestart = (): void => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const handleWordClick = (index: number): void => {
    setEditingIndex(index);
  };

  const handleWordEdit = (index: number, newWord: string): void => {
    if (newWord.trim() !== "") {
      const updatedTranscript = [...transcript];
      updatedTranscript[index] = { ...updatedTranscript[index], word: newWord.trim() };
      setTranscript(updatedTranscript);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setEditingIndex(null);
    }
  };

  const formatTime = (timeInMs: number): string => {
    const totalSeconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = timeInMs % 1000;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${(milliseconds / 10).toFixed(0).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-900 text-white">
      <div className="mb-4 flex items-center">
        <button
          onClick={togglePlayback}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={handleRestart}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
        >
          <Rewind size={24} />
        </button>
        <span className="text-xl">{formatTime(currentTime)}</span>
      </div>
      <div className="space-y-4">
        {transcript.map((item, index) => {
          const isHighlighted =
            currentTime >= item.start_time &&
            currentTime < item.start_time + item.duration;
          const isFirstOfSegment = index === 0 || item.start_time - transcript[index - 1].start_time - transcript[index - 1].duration > 100;
          
          return (
            <Fragment key={index}>
              {isFirstOfSegment && (
                <div className="text-gray-500 text-sm">{formatTime(item.start_time)}</div>
              )}
              <span
                className={`inline-block cursor-pointer mr-1 ${
                  isHighlighted ? 'bg-yellow-500 text-black' : ''
                }`}
                onClick={() => handleWordClick(index)}
              >
                {editingIndex === index ? (
                  <input
                    ref={inputRef}
                    type="text"
                    value={item.word}
                    onChange={(e) => handleWordEdit(index, e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={() => setEditingIndex(null)}
                    className="bg-gray-800 border-b border-gray-300 focus:outline-none focus:border-blue-500 text-white"
                  />
                ) : (
                  item.word
                )}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TranscriptEditor;