export type TranscriptWord = {
  word: string;
  start_time: number;
  duration: number;
  isKeyword?: boolean;
};

export type TranscriptSegment = {
  words: TranscriptWord[];
  start_time: number;
}
