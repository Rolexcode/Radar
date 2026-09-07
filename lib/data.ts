import type { EcosystemSignal, Opportunity } from './types';

export const opportunities: Opportunity[] = [
  {
    id: 'base-builder-push',
    title: 'Base builder opportunity signal',
    source: 'Radar seed',
    ecosystem: 'Base',
    deadline: 'Watching',
    prize: 'TBD',
    cost: '₦0 prep',
    fit: 92,
    time: 82,
    competition: 63,
    reuse: 88,
    upside: 90,
    underRadar: 79,
    action: 'PREPARE',
    summary: 'Developer activity and repeated ecosystem pushes make Base worth preparing for before the next obvious application window.',
    reuseProject: 'basehack'
  },
  {
    id: 'student-innovation',
    title: 'Nigeria student innovation scout',
    source: 'Radar seed',
    ecosystem: 'Student / Nigeria',
    deadline: 'Continuous scan',
    prize: 'Varies',
    cost: 'Prioritize ₦0',
    fit: 95,
    time: 90,
    competition: 80,
    reuse: 91,
    upside: 84,
    underRadar: 94,
    action: 'WATCH',
    summary: 'Track campus, government, NGO and corporate student challenges before they spread widely on social media.',
    reuseProject: 'CampusGig'
  },
  {
    id: 'voice-ai-africa',
    title: 'African voice AI ecosystem',
    source: 'Radar seed',
    ecosystem: 'Voice AI / Africa',
    deadline: 'Watching',
    prize: 'TBD',
    cost: '₦0 prep',
    fit: 89,
    time: 78,
    competition: 66,
    reuse: 93,
    upside: 87,
    underRadar: 86,
    action: 'PREPARE',
    summary: 'Language, speech and local-AI programs are a strong reuse lane because an existing multilingual voice project already covers much of the technical surface.',
    reuseProject: 'Ìròyìn'
  }
];

export const ecosystems: EcosystemSignal[] = [
  { name: 'Base', score: 82, direction: 'heating', evidence: ['Recurring builder programs', 'Strong reusable project fit', 'Active developer ecosystem'], prepare: 'Polish Base tooling, contracts and current project.' },
  { name: 'African AI', score: 78, direction: 'heating', evidence: ['Regional language-tech programs', 'Growing local AI focus', 'Existing reusable voice stack'], prepare: 'Keep multilingual benchmark and demo assets ready.' },
  { name: 'Student innovation', score: 87, direction: 'heating', evidence: ['Frequent short-window challenges', 'Lower discovery efficiency', 'High eligibility fit'], prepare: 'Keep ID, bio, pitch, deck and proof-of-work bundle ready.' }
];
