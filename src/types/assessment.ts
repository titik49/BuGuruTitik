export type QuestionType = 'PG' | 'PGK_KATEGORI' | 'PGK_MCMA';

export type IllustrationId =
  | 'dice'
  | 'library-chart'
  | 'book-pictogram'
  | 'zoo-signpost'
  | 'birthday-cake'
  | 'pak-boni-land'
  | 'city-park-map'
  | 'reading-hobby'
  | 'nutrition-chart-kids'
  | 'nutrition-chart-pregnant';

export interface PgOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface KategoriStatement {
  id: 'A' | 'B' | 'C';
  text: string;
  correctAnswer: 'Benar' | 'Salah';
  explanation: string;
}

export interface McmaOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface ExplanationStep {
  title: string;
  content: string;
}

export interface BaseQuestion {
  number: number;
  competency: string;
  competencyShort: string;
  type: QuestionType;
  typeLabel: string;
  passageTitle?: string;
  passageIntro?: string;
  illustration?: IllustrationId;
  stem: string;
  stemAfterIllustration?: string;
  keySummary: string;
  steps: ExplanationStep[];
  tip?: string;
}

export interface PgQuestion extends BaseQuestion {
  type: 'PG';
  options: PgOption[];
  correctOption: 'A' | 'B' | 'C' | 'D';
}

export interface KategoriQuestion extends BaseQuestion {
  type: 'PGK_KATEGORI';
  statements: KategoriStatement[];
}

export interface McmaQuestion extends BaseQuestion {
  type: 'PGK_MCMA';
  options: McmaOption[];
}

export type TkaQuestion = PgQuestion | KategoriQuestion | McmaQuestion;

export type StudentAnswer =
  | {
      type: 'PG';
      selected: 'A' | 'B' | 'C' | 'D';
    }
  | {
      type: 'PGK_KATEGORI';
      selections: Partial<Record<'A' | 'B' | 'C', 'Benar' | 'Salah'>>;
    }
  | {
      type: 'PGK_MCMA';
      selectedIds: string[];
      submitted: boolean;
    };
