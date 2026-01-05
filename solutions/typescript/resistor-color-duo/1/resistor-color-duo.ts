export function decodedValue(colors: string[]): number {
  const COLORS: string[] = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
  return Number(
    COLORS.indexOf(colors[0]).toString() +
    COLORS.indexOf(colors[1]).toString()
  );
}
