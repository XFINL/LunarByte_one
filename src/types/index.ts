export interface Song {
  id: string;
  title: string;
  artist: string;
  cover: string;
  duration: number;
}

export interface SearchHistoryItem {
  id: string;
  text: string;
  timestamp: number;
}
