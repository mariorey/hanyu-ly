export interface VocabItem {
  type: 'word' | 'phrase';
  chinese: string;
  pinyin: string;
  meaning: string;
  tags?: string[];
  extra?: boolean;
}
