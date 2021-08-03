import { Part } from '../classes/Part';

export const sumOfStats = (parts: Part[]): number[] => {
  const adjustStat = (stat: number): number => stat / 4 + 0.75;
  return [
    adjustStat(
      parts
        .map((part) => (part !== undefined ? part.stats.groundSpeed : 0))
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => (part !== undefined ? part.stats.acceleration : 0))
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => (part !== undefined ? part.stats.weight : 0))
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => (part !== undefined ? part.stats.groundHandling : 0))
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => (part !== undefined ? part.stats.offRoadTraction : 0))
        .reduce((sum, current) => sum + current)
    ),
  ];
};

export const statColor = (stat: number): string => {
  const startColor = [38, 186, 255];
  const endColor = [249, 36, 112];
  const diffs = startColor.map((color, index) => endColor[index] - color);
  const color = diffs.map(
    (diff, index) => startColor[index] + diff * (stat / 6)
  );
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};
