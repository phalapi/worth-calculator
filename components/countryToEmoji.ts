// ISO 3166-1 alpha-2 转 emoji 国旗
export default function countryToEmoji(code: string): string {
  if (!code || code.length !== 2) return "🏳️";
  return String.fromCodePoint(...code.toUpperCase().split('').map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}
