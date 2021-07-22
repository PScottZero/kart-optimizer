import { Part } from '../classes/Part';

export const sumOfStats = (parts: Part[]): number[] => {
  const adjustStat = (stat: number): number => stat / 4 + 0.75;
  return [
    adjustStat(
      parts
        .map((part) => part.stats.groundSpeed)
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => part.stats.acceleration)
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => part.stats.weight)
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => part.stats.groundHandling)
        .reduce((sum, current) => sum + current)
    ),
    adjustStat(
      parts
        .map((part) => part.stats.offRoadTraction)
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
