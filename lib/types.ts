export type ActionLabel = 'APPLY NOW' | 'PREPARE' | 'WATCH' | 'SKIP';

export type Opportunity = {
  id: string;
  title: string;
  source: string;
  ecosystem: string;
  deadline: string;
  prize: string;
  cost: string;
  fit: number;
  time: number;
  competition: number;
  reuse: number;
  upside: number;
  underRadar: number;
  action: ActionLabel;
  summary: string;
  reuseProject?: string;
};

export type EcosystemSignal = {
  name: string;
  score: number;
  direction: 'heating' | 'steady' | 'cooling';
  evidence: string[];
  prepare: string;
};
