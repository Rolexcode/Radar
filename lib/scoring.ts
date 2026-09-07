import type { Opportunity } from './types';

export function scoreOpportunity(o: Opportunity) {
  const score =
    o.fit * 0.25 +
    o.time * 0.1 +
    o.competition * 0.1 +
    o.reuse * 0.2 +
    o.upside * 0.2 +
    o.underRadar * 0.15;
  return Math.round(score);
}
