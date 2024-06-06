export function padWithZero(number: number): string {
  return number.toString().padStart(2, '0');
}
